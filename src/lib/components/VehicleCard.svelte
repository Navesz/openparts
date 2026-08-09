<script lang="ts">
  import { base } from '$app/paths';
  import { vehicleImage } from '$lib/media';
  import type { VehicleContext } from '$lib/domain/types';

  let {
    vehicle,
    partCount,
    compact = false
  }: {
    vehicle: VehicleContext;
    partCount?: number;
    compact?: boolean;
  } = $props();
</script>

<a
  class="vehicle-card"
  class:compact
  href={`${base}/veiculo/${vehicle.id}/`}
  aria-label="Ver peças do {vehicle.make} {vehicle.model} {vehicle.generation}"
>
  <img
    class="vehicle-art"
    src={vehicleImage(vehicle.model, vehicle.generation)}
    alt="Foto de {vehicle.make} {vehicle.model} {vehicle.generation}"
  />
  <div class="vehicle-card-body">
    <strong>{vehicle.make} {vehicle.model} {vehicle.generation}</strong>
    <div class="meta">
      {vehicle.years} · {vehicle.market}{#if vehicle.platformFamily}
        · {vehicle.platformFamily}{/if}
    </div>
    {#if !compact}
      <p>{vehicle.notes}</p>
    {/if}
    <span class="vehicle-cta">
      {#if partCount != null}
        Ver {partCount} peça{partCount === 1 ? '' : 's'} →
      {:else}
        Ver peças deste carro →
      {/if}
    </span>
  </div>
</a>
