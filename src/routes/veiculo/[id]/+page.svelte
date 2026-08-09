<script lang="ts">
  import { base } from '$app/paths';
  import { categoryImage, vehicleImage } from '$lib/media';
  import { pt } from '$lib/i18n/pt';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  const t = pt.vehicle;

  function categoryLabel(category: string): string {
    return (pt.categories as Record<string, string>)[category] ?? category;
  }

  function searchHref(code: string): string {
    const q = new URLSearchParams({ code });
    return `${base}/?${q.toString()}`;
  }
</script>

<main class="shell">
  <section class="hero hero-with-media vehicle-hero">
    <div>
      <p class="meta mono">{t.eyebrow}</p>
      <h1 class="brand">{data.vehicle.make} {data.vehicle.model} {data.vehicle.generation}</h1>
      <p class="lede">
        {data.vehicle.years} · {data.vehicle.market}{#if data.vehicle.platformFamily}
          · {data.vehicle.platformFamily}{/if}
      </p>
      <p>{data.vehicle.notes}</p>
      {#if data.vehicle.relatedPlatformNotes.length}
        <ul>
          {#each data.vehicle.relatedPlatformNotes as note}
            <li class="meta">{note}</li>
          {/each}
        </ul>
      {/if}
      <div class="banner" role="note">{t.banner}</div>
      <p class="meta">
        <a href="{base}/">{t.backSearch}</a>
        ·
        <a href="{base}/plataformas/">{t.backPlatforms}</a>
      </p>
    </div>
    <figure class="hero-figure">
      <img
        src={vehicleImage(data.vehicle.model, data.vehicle.generation)}
        alt="Foto de {data.vehicle.make} {data.vehicle.model} {data.vehicle.generation}"
      />
    </figure>
  </section>

  <section class="panel">
    <h2>{t.partsHeading} ({data.parts.length})</h2>
    {#if data.parts.length === 0}
      <p class="meta">{t.noParts}</p>
    {:else}
      <div class="parts-grid">
        {#each data.parts as p}
          <a class="part-card part-link" href={searchHref(p.code)}>
            <img src={categoryImage(p.category)} alt="" width="56" height="56" class="cat-icon" />
            <div>
              <strong class="mono">{p.code}</strong>
              <div>{p.label}</div>
              <div class="meta">
                {categoryLabel(p.category)} · {p.safetyClass} · {p.brand}
              </div>
              <span class="vehicle-cta">{t.openInSearch}</span>
            </div>
          </a>
        {/each}
      </div>
    {/if}
  </section>

  {#if data.vehicle.sources.length}
    <section class="panel" style="margin-top:1rem;">
      <h2>{t.sourcesHeading}</h2>
      <ul class="source-list">
        {#each data.vehicle.sources as s}
          <li>
            {s.kind}: {s.summary}
            {#if s.url}
              · <a href={s.url} rel="noreferrer" target="_blank">{t.sourceLink}</a>
            {/if}
          </li>
        {/each}
      </ul>
    </section>
  {/if}
</main>
