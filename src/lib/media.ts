import { base } from '$app/paths';

/** Real photos under /static/images (see docs/IMAGE_CREDITS.md). */

export function vehicleImage(model: string, generation: string): string {
  const m = model.toLowerCase();
  if (m === 'vectra' && generation === 'C') return `${base}/images/vehicles/vectra-c.jpg`;
  if (m === 'vectra') return `${base}/images/vehicles/vectra-b.jpg`;
  if (m === 'astra') return `${base}/images/vehicles/astra.jpg`;
  if (m === 'zafira') return `${base}/images/vehicles/zafira.jpg`;
  if (m === 'monza') return `${base}/images/vehicles/monza.jpg`;
  if (m === 'corsa') return `${base}/images/vehicles/corsa.jpg`;
  if (m === 'celta') return `${base}/images/vehicles/celta.jpg`;
  if (m === 'prisma') return `${base}/images/vehicles/prisma.jpg`;
  if (m === 'meriva') return `${base}/images/vehicles/meriva.jpg`;
  return `${base}/images/vehicles/chevrolet-generic.jpg`;
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
  return `${base}/images/categories/${key}.jpg`;
}

export function heroImage(): string {
  return `${base}/images/hero/hero-vectra.jpg`;
}
