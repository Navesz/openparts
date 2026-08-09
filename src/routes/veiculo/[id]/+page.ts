import { error } from '@sveltejs/kit';
import { getVehicle, getVehicles, listPartsForVehicle } from '$lib/search';
import type { PageLoad } from './$types';

export const prerender = true;

export function entries() {
  return getVehicles().map((v) => ({ id: v.id }));
}

export const load: PageLoad = ({ params }) => {
  const vehicle = getVehicle(params.id);
  if (!vehicle) {
    throw error(404, 'Veículo não encontrado neste fixture alpha.');
  }
  return {
    vehicle,
    parts: listPartsForVehicle(vehicle.id)
  };
};
