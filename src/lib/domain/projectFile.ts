import type { CatalogDocument, SearchResult } from '$lib/domain/types';

export interface OpartsProject {
  schemaVersion: 1;
  kind: 'openparts-project';
  savedAt: string;
  query: string;
  vehicleId: string;
  notes: string;
  lastResultStatus?: SearchResult['status'];
}

export function createProject(input: {
  query: string;
  vehicleId: string;
  notes: string;
  lastResultStatus?: SearchResult['status'];
}): OpartsProject {
  return {
    schemaVersion: 1,
    kind: 'openparts-project',
    savedAt: new Date().toISOString(),
    query: input.query,
    vehicleId: input.vehicleId,
    notes: input.notes,
    lastResultStatus: input.lastResultStatus
  };
}

export function serializeProject(project: OpartsProject): string {
  return `${JSON.stringify(project, null, 2)}\n`;
}

export function parseProject(raw: string): OpartsProject {
  const data = JSON.parse(raw) as Partial<OpartsProject>;
  if (data.schemaVersion !== 1 || data.kind !== 'openparts-project') {
    throw new Error('Unsupported .oparts.json project file');
  }
  return {
    schemaVersion: 1,
    kind: 'openparts-project',
    savedAt: typeof data.savedAt === 'string' ? data.savedAt : new Date().toISOString(),
    query: typeof data.query === 'string' ? data.query : '',
    vehicleId: typeof data.vehicleId === 'string' ? data.vehicleId : '',
    notes: typeof data.notes === 'string' ? data.notes : '',
    lastResultStatus: data.lastResultStatus
  };
}

export type { CatalogDocument };
