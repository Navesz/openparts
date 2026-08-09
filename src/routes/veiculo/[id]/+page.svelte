<script lang="ts">
  import { base } from '$app/paths';
  import {
    getVehicle,
    groupPartsByCategory,
    listPartsForVehicle,
    listSiblingVehicles
  } from '$lib/search';
  import { categoryImage, vehicleImage } from '$lib/media';
  import VehicleCard from '$lib/components/VehicleCard.svelte';
  import { pt } from '$lib/i18n/pt';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  const t = pt.vehicle;

  let categoryFilter = $state('all');

  const siblings = $derived(listSiblingVehicles(data.vehicle.id));
  const grouped = $derived(groupPartsByCategory(data.parts));
  const categories = $derived(grouped.map((g) => g.category));
  const visibleGroups = $derived(
    categoryFilter === 'all' ? grouped : grouped.filter((g) => g.category === categoryFilter)
  );

  function categoryLabel(category: string): string {
    return (pt.categories as Record<string, string>)[category] ?? category;
  }

  function searchHref(code: string): string {
    const q = new URLSearchParams({ code });
    return `${base}/?${q.toString()}`;
  }

  function otherVehicles(partFits: string[]): string {
    return partFits
      .filter((id) => id !== data.vehicle.id)
      .map((id) => getVehicle(id))
      .filter(Boolean)
      .map((v) => `${v!.model} ${v!.generation}`)
      .join(', ');
  }
</script>

<main class="shell">
  <nav class="crumb meta" aria-label="Breadcrumb">
    <a href="{base}/">{t.backSearch}</a>
    <span>/</span>
    <a href="{base}/plataformas/">{t.backPlatforms}</a>
    <span>/</span>
    <span>{data.vehicle.model} {data.vehicle.generation}</span>
  </nav>

  <section class="hero hero-with-media vehicle-hero">
    <div>
      <p class="meta mono">{t.eyebrow}</p>
      <h1 class="brand">{data.vehicle.make} {data.vehicle.model} {data.vehicle.generation}</h1>
      <p class="lede">
        {data.vehicle.years} · {data.vehicle.market}{#if data.vehicle.platformFamily}
          · {data.vehicle.platformFamily}{/if}
      </p>
      <p class="stat-line">
        <strong>{data.parts.length}</strong>
        {t.partCount}
      </p>
      <p>{data.vehicle.notes}</p>
      {#if data.vehicle.relatedPlatformNotes.length}
        <ul class="note-list">
          {#each data.vehicle.relatedPlatformNotes as note}
            <li class="meta">{note}</li>
          {/each}
        </ul>
      {/if}
      <div class="banner" role="note">{t.banner}</div>
    </div>
    <figure class="hero-figure">
      <img
        src={vehicleImage(data.vehicle.model, data.vehicle.generation)}
        alt="Foto de {data.vehicle.make} {data.vehicle.model} {data.vehicle.generation}"
      />
    </figure>
  </section>

  <section class="panel">
    <div class="section-head">
      <h2>{t.partsHeading} ({data.parts.length})</h2>
    </div>

    {#if data.parts.length === 0}
      <p class="meta">{t.noParts}</p>
    {:else}
      <div class="chip-row" role="group" aria-label={t.filterLabel}>
        <button
          type="button"
          class="chip"
          class:active={categoryFilter === 'all'}
          onclick={() => (categoryFilter = 'all')}
        >
          {t.filterAll}
        </button>
        {#each categories as cat}
          <button
            type="button"
            class="chip"
            class:active={categoryFilter === cat}
            onclick={() => (categoryFilter = cat)}
          >
            {categoryLabel(cat)}
          </button>
        {/each}
      </div>

      {#if visibleGroups.length === 0}
        <p class="meta">{t.noFilterMatch}</p>
      {:else}
        {#each visibleGroups as group}
          <h3 class="group-title">{categoryLabel(group.category)}</h3>
          <div class="parts-grid">
            {#each group.parts as p}
              <a class="part-card part-link" href={searchHref(p.code)}>
                <img
                  src={categoryImage(p.category)}
                  alt=""
                  width="64"
                  height="64"
                  class="cat-icon cat-icon-lg"
                />
                <div>
                  <strong class="mono">{p.code}</strong>
                  <div>{p.label}</div>
                  <div class="meta">{p.safetyClass} · {p.brand}</div>
                  {#if otherVehicles(p.fitsVehicleIds)}
                    <div class="meta">
                      {t.sharedWith}: {otherVehicles(p.fitsVehicleIds)}
                    </div>
                  {/if}
                  <span class="vehicle-cta">{t.openInSearch}</span>
                </div>
              </a>
            {/each}
          </div>
        {/each}
      {/if}
    {/if}
  </section>

  {#if siblings.length}
    <section class="panel" style="margin-top:1rem;">
      <h2>{t.siblingsHeading}</h2>
      <div class="vehicle-grid">
        {#each siblings as v}
          <VehicleCard vehicle={v} partCount={listPartsForVehicle(v.id).length} compact />
        {/each}
      </div>
    </section>
  {/if}

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
