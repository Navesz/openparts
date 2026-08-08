<script lang="ts">
  import { getVehicles } from '$lib/search';
  import { vehicleImage } from '$lib/media';

  const vehicles = getVehicles();
  const families = [...new Set(vehicles.map((v) => v.platformFamily).filter(Boolean))];
</script>

<main class="shell">
  <section class="hero">
    <h1 class="brand">Plataformas GM</h1>
    <p class="lede">
      Muitos Chevrolets compartilham base ou motor. Isso ajuda a <strong>investigar</strong>, mas
      não substitui o código gravado na peça nem um catálogo profissional.
    </p>
  </section>

  <section class="panel">
    <h2>Famílias usadas neste alpha</h2>
    <ul>
      <li>
        <strong>Família I (1.0 / 1.4 / 1.8)</strong> — narrativa educacional: Corsa, Celta, Prisma, Meriva
        (e Montana antiga na literatura de oficina). Sensores/bobinas/termostatos costumam ser parecidos;
        geração e injeção mudam tudo.
      </li>
      <li>
        <strong>Família II (2.0 / 2.4)</strong> — Monza, Vectra, Astra, Zafira: componentes
        mecânicos e de ignição frequentemente discutidos juntos. Demo:
        <code>SYN-FAMILY2-OIL-01</code>.
      </li>
      <li>
        <strong>Ecotec (moderno)</strong> — Cruze/Sonic/Tracker: fora do fixture atual; exige atenção
        a juntas/retentores mesmo quando “parece igual”.
      </li>
    </ul>
    <div class="banner" role="note">
      Dica: anote modelo + ano + motor + peça exata + código OEM. Fluxo profissional sugerido:
      código gravado → CepChev → TecDoc/Nakata → confirmar no veículo.
    </div>
  </section>

  {#each families as family}
    <section class="panel" style="margin-top:1rem;">
      <h2>{family}</h2>
      <div class="vehicle-grid">
        {#each vehicles.filter((v) => v.platformFamily === family) as v}
          <article class="vehicle">
            <img class="vehicle-art" src={vehicleImage(v.model, v.generation)} alt="" />
            <strong>{v.model} {v.generation}</strong>
            <div class="meta">{v.years}</div>
            <p class="meta">{v.notes}</p>
          </article>
        {/each}
      </div>
    </section>
  {/each}
</main>
