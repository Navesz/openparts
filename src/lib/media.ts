import { base } from '$app/paths';

export function vehicleImage(model: string, generation: string): string {
  const m = model.toLowerCase();
  if (m === 'vectra' && generation === 'C') return `${base}/images/vehicles/vectra-c.svg`;
  if (m === 'vectra') return `${base}/images/vehicles/vectra-b.svg`;
  return `${base}/images/vehicles/chevrolet-generic.svg`;
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
