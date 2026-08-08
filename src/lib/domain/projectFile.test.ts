import { describe, expect, it } from 'vitest';
import { createProject, parseProject, serializeProject } from './projectFile';

describe('oparts project file', () => {
  it('round-trips a project document', () => {
    const project = createProject({
      query: 'SYN-VB-CABIN-01',
      vehicleId: 'vectra-b-br',
      notes: 'check cabin filter demo',
      lastResultStatus: 'ok'
    });
    const again = parseProject(serializeProject(project));
    expect(again.query).toBe('SYN-VB-CABIN-01');
    expect(again.vehicleId).toBe('vectra-b-br');
    expect(again.kind).toBe('openparts-project');
  });

  it('rejects unknown kinds', () => {
    expect(() => parseProject(JSON.stringify({ schemaVersion: 1, kind: 'nope' }))).toThrow(
      /Unsupported/
    );
  });
});
