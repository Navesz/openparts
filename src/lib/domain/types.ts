/** Domain types for OpenPartLine interchange graph. Framework-free. */

export type Confidence = 'curated' | 'synthetic' | 'community-proposed' | 'do-not-advise';

export type SafetyClass =
  | 'non-critical'
  | 'wear-item'
  | 'safety-critical'
  | 'unknown';

export interface Provenance {
  kind: 'synthetic-demo' | 'public-article' | 'curator-note' | 'user-import';
  summary: string;
  url?: string;
  accessed?: string;
}

export interface VehicleContext {
  id: string;
  make: 'Chevrolet';
  model: 'Vectra';
  generation: 'A' | 'B' | 'C';
  market: 'BR';
  years: string;
  notes: string;
  relatedPlatformNotes: string[];
  sources: Provenance[];
}

export interface PartNode {
  id: string;
  code: string;
  brand: string;
  label: string;
  category: string;
  safetyClass: SafetyClass;
  fitsVehicleIds: string[];
  notes?: string;
}

export interface EquivalenceEdge {
  id: string;
  fromPartId: string;
  toPartId: string;
  confidence: Confidence;
  reason: string;
  bidirectional: boolean;
  provenance: Provenance;
}

export interface CatalogDocument {
  schemaVersion: 1;
  name: string;
  description: string;
  vehicles: VehicleContext[];
  parts: PartNode[];
  equivalences: EquivalenceEdge[];
}

export interface SearchHit {
  part: PartNode;
  matchedVia: 'exact-code' | 'equivalence' | 'vehicle-filter';
  confidence: Confidence;
  reason: string;
  relatedPart?: PartNode;
  warnings: string[];
}

export interface SearchResult {
  query: string;
  status: 'ok' | 'empty' | 'unknown-code' | 'blocked';
  hits: SearchHit[];
  messages: string[];
}
