<script lang="ts">
  import { getVehicles, listPartsForVehicle } from '$lib/search';
  import VehicleCard from '$lib/components/VehicleCard.svelte';

  const vehicles = getVehicles();
  const families = [...new Set(vehicles.map((v) => v.platformFamily).filter(Boolean))];
</script>

<main class="shell">
  <section class="hero">
    <h1 class="brand">Plataformas GM</h1>
    <p class="lede">
      Muitos Chevrolets compartilham base ou motor. Clique em um carro para ver as peças do fixture.
      Isso ajuda a <strong>investigar</strong>, mas não substitui o código gravado nem um catálogo
      profissional.
    </p>
  </section>

  <section class="panel">
    <h2>Famílias usadas neste alpha</h2>
    <ul>
      <li>
        <strong>Família I (1.0 / 1.4 / 1.8)</strong> — Corsa, Celta, Prisma, Meriva. Demos:
        <code>SYN-FAMILY1-THERMO-01</code>, <code>SYN-FAMILY1-COIL-01</code>,
        <code>SYN-FAMILY1-O2-01</code>.
      </li>
      <li>
        <strong>Família II (2.0 / 2.4)</strong> — Monza, Vectra, Astra, Zafira. Demo:
        <code>SYN-FAMILY2-OIL-01</code>.
      </li>
      <li>
        <strong>Ecotec (moderno)</strong> — Cruze/Sonic/Tracker: fora do fixture atual.
      </li>
    </ul>
    <div class="banner" role="note">
      Fluxo: escolher o carro → ver peças → abrir código na busca → confirmar no CepChev/TecDoc.
    </div>
  </section>

  {#each families as family}
    <section class="panel" style="margin-top:1rem;">
      <h2>{family}</h2>
      <div class="vehicle-grid">
        {#each vehicles.filter((v) => v.platformFamily === family) as v}
          <VehicleCard vehicle={v} partCount={listPartsForVehicle(v.id).length} compact />
        {/each}
      </div>
    </section>
  {/each}
</main>
