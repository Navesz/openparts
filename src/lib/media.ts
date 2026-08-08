import { base } from '$app/paths';

export function vehicleImage(generation: string): string {
  const key = generation === 'C' ? 'vectra-c' : 'vectra-b';
  return `${base}/images/vehicles/${key}.svg`;
}

export function categoryImage(category: string): string {
  const allowed = new Set([
    'filter',
    'brakes',
    'ignition',
    'electrical',
    'cooling',
    'body',
    'wipers',
    'belt',
    'sensor'
  ]);
  const key = allowed.has(category) ? category : 'filter';
  return `${base}/images/categories/${key}.svg`;
}

export function heroImage(): string {
  return `${base}/images/hero/hero-vectra.png`;
}
