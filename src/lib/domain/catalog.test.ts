import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { assertCatalog, loadIndex, searchCatalog } from './catalog';
import type { CatalogDocument } from './types';

const root = join(dirname(fileURLToPath(import.meta.url)), '../../..');
const fixturePath = join(root, 'data/fixtures/vectra/alpha.catalog.json');

function loadFixture(): CatalogDocument {
  return JSON.parse(readFileSync(fixturePath, 'utf8')) as CatalogDocument;
}

describe('Vectra alpha catalog', () => {
  it('validates fixture structure', () => {
    const doc = loadFixture();
    expect(() => assertCatalog(doc)).not.toThrow();
    expect(doc.parts.every((p) => p.code.startsWith('SYN-'))).toBe(true);
  });

  it('finds a direct synthetic code', () => {
    const result = searchCatalog(loadFixture(), 'syn-vb-cabin-01');
    expect(result.status).toBe('ok');
    expect(result.hits[0]?.part.code).toBe('SYN-VB-CABIN-01');
  });

  it('returns unknown-code without inventing matches', () => {
    const result = searchCatalog(loadFixture(), 'REAL-OEM-SHOULD-NOT-EXIST');
    expect(result.status).toBe('unknown-code');
    expect(result.hits).toHaveLength(0);
  });

  it('lists multi-vehicle applications for Family II demo oil filter', () => {
    const index = loadIndex(loadFixture());
    const result = index.search('SYN-FAMILY2-OIL-01');
    expect(result.status).toBe('ok');
    const hit = result.hits[0];
    expect(hit?.applications.length).toBeGreaterThan(2);
    expect(hit?.applications.some((v) => v.model === 'Astra')).toBe(true);
  });

  it('surfaces do-not-advise brake equivalence instead of silent success', () => {
    const index = loadIndex(loadFixture());
    const result = index.search('SYN-VB-BRAKE-F-01');
    const blocked = result.hits.filter((h) => h.confidence === 'do-not-advise');
    expect(blocked.length).toBeGreaterThan(0);
    expect(blocked[0]?.warnings.join(' ')).toMatch(
      /Categoria de segurança|bloqueada|sintético|não use/i
    );
  });
});
