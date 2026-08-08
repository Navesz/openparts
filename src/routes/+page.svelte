<script lang="ts">
  import { getCatalogName, getVehicles, runSearch } from '$lib/search';
  import type { SearchResult } from '$lib/domain/types';

  const vehicles = getVehicles();
  const catalogName = getCatalogName();

  let query = $state('SYN-VB-CABIN-01');
  let vehicleId = $state('');
  let result = $state<SearchResult | null>(null);

  function search() {
    result = runSearch(query, vehicleId || undefined);
  }

  function resetDemo() {
    query = 'SYN-VB-CABIN-01';
    vehicleId = '';
    search();
  }

  search();
</script>

<main class="shell">
  <section class="hero">
    <p class="meta mono">local-first · Vectra alpha · {catalogName}</p>
    <h1 class="brand">Open Parts</h1>
    <p class="lede">
      Look up Chevrolet Vectra part codes and see explainable interchange
      candidates with confidence and provenance. This alpha uses synthetic demo
      SKUs on purpose — it will not invent real OEM numbers.
    </p>
    <div class="banner" role="note">
      Not a fitment certificate. Verify before buying or installing. Safety-critical
      categories default to do-not-advise in alpha.
    </div>
  </section>

  <section class="panel">
    <form
      class="controls"
      onsubmit={(e) => {
        e.preventDefault();
        search();
      }}
    >
      <label>
        Part code or text
        <input bind:value={query} placeholder="e.g. SYN-VB-CABIN-01" autocomplete="off" />
      </label>
      <label>
        Vehicle filter
        <select bind:value={vehicleId}>
          <option value="">All Vectra fixtures</option>
          {#each vehicles as v}
            <option value={v.id}>{v.model} {v.generation} ({v.years})</option>
          {/each}
        </select>
      </label>
      <div style="display:flex; gap:0.5rem;">
        <button type="submit">Search</button>
        <button class="secondary" type="button" onclick={resetDemo}>Demo</button>
      </div>
    </form>

    {#if result}
      <div class="results" aria-live="polite">
        <p class="meta">
          Status: <strong class="mono">{result.status}</strong>
          {#if result.messages.length}
            — {result.messages.join(' ')}
          {/if}
        </p>

        {#if result.hits.length === 0}
          <div class="hit">
            <strong>No match</strong>
            <p class="meta">
              Open Parts refuses to invent an equivalence when the catalog has no
              evidence.
            </p>
          </div>
        {/if}

        {#each result.hits as hit}
          <article class="hit">
            <header>
              <strong class="mono">{hit.part.code}</strong>
              <span class="badge {hit.confidence}">{hit.confidence}</span>
              <span class="meta">{hit.matchedVia}</span>
            </header>
            <div>{hit.part.label} · {hit.part.category} · {hit.part.brand}</div>
            <p class="meta">{hit.reason}</p>
            {#if hit.relatedPart}
              <p class="meta">Related to <span class="mono">{hit.relatedPart.code}</span></p>
            {/if}
            {#if hit.warnings.length}
              <ul class="warnings">
                {#each hit.warnings as w}
                  <li>{w}</li>
                {/each}
              </ul>
            {/if}
          </article>
        {/each}
      </div>
    {/if}
  </section>

  <section class="vehicles">
    <h2>Fixture vehicles</h2>
    {#each vehicles as v}
      <article class="panel vehicle">
        <strong>{v.make} {v.model} {v.generation}</strong>
        <div class="meta">{v.years} · {v.market}</div>
        <p>{v.notes}</p>
        <ul class="meta">
          {#each v.relatedPlatformNotes as note}
            <li>{note}</li>
          {/each}
        </ul>
      </article>
    {/each}
  </section>
</main>
