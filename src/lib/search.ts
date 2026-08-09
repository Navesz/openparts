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

export function listSiblingVehicles(vehicleId: string): VehicleContext[] {
  const current = getVehicle(vehicleId);
  if (!current?.platformFamily) return [];
  return getVehicles().filter(
    (v) => v.id !== vehicleId && v.platformFamily === current.platformFamily
  );
}

export function groupPartsByCategory(parts: PartNode[]): { category: string; parts: PartNode[] }[] {
  const map = new Map<string, PartNode[]>();
  for (const part of parts) {
    const list = map.get(part.category) ?? [];
    list.push(part);
    map.set(part.category, list);
  }
  return [...map.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, grouped]) => ({
      category,
      parts: grouped.sort((x, y) => x.code.localeCompare(y.code))
    }));
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
