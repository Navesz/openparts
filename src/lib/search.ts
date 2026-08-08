import { loadIndex } from '$lib/domain/catalog';
import { alphaCatalog } from '$lib/data/alphaCatalog';
import type { SearchResult, VehicleContext } from '$lib/domain/types';

const index = loadIndex(alphaCatalog);

export function getVehicles(): VehicleContext[] {
  return index.listVehicles();
}

export function runSearch(query: string, vehicleId?: string): SearchResult {
  return index.search(query, { vehicleId: vehicleId || undefined });
}

export function getCatalogName(): string {
  return alphaCatalog.name;
}
