import { loadIndex } from '$lib/domain/catalog';
import { alphaCatalog } from '$lib/data/alphaCatalog';
import type { PartNode, SearchResult, VehicleContext } from '$lib/domain/types';

const index = loadIndex(alphaCatalog);

export function getVehicles(): VehicleContext[] {
  return index.listVehicles();
}

export function getVehicle(id: string): VehicleContext | undefined {
  return index.listVehicles().find((v) => v.id === id);
}

export function listPartsForVehicle(vehicleId: string): PartNode[] {
  return alphaCatalog.parts.filter((p) => p.fitsVehicleIds.includes(vehicleId));
}

export function runSearch(query: string, vehicleId?: string): SearchResult {
  return index.search(query, { vehicleId: vehicleId || undefined });
}

export function getCatalogName(): string {
  return alphaCatalog.name;
}

export function getCatalogDescription(): string {
  return alphaCatalog.description;
}

export function listParts() {
  return alphaCatalog.parts;
}

export function listEquivalences() {
  return alphaCatalog.equivalences;
}
