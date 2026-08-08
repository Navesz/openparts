<script lang="ts">
  import { getCatalogName, getVehicles, runSearch } from '$lib/search';
  import { createProject, parseProject, serializeProject } from '$lib/domain/projectFile';
  import type { SearchResult } from '$lib/domain/types';

  const vehicles = getVehicles();
  const catalogName = getCatalogName();

  let query = $state('SYN-VB-CABIN-01');
  let vehicleId = $state('');
  let notes = $state('');
  let result = $state<SearchResult | null>(null);
  let fileMessage = $state('');

  function search() {
    result = runSearch(query, vehicleId || undefined);
    fileMessage = '';
  }

  function resetDemo() {
    query = 'SYN-VB-CABIN-01';
    vehicleId = '';
    notes = '';
    search();
  }

  function tryUnknown() {
    query = 'REAL-OEM-SHOULD-NOT-EXIST';
    search();
  }

  function tryBrake() {
    query = 'SYN-VB-BRAKE-F-01';
    search();
  }

  function downloadProject() {
    const project = createProject({
      query,
      vehicleId,
      notes,
      lastResultStatus: result?.status
    });
    const blob = new Blob([serializeProject(project)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'openparts-notes.oparts.json';
    a.click();
    URL.revokeObjectURL(url);
    fileMessage = 'Downloaded local .oparts.json notes file.';
  }

  async function onImport(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const project = parseProject(text);
      query = project.query;
      vehicleId = project.vehicleId;
      notes = project.notes;
      search();
      fileMessage = `Loaded project saved at ${project.savedAt}`;
    } catch (error) {
      fileMessage = error instanceof Error ? error.message : 'Failed to import project';
    } finally {
      input.value = '';
    }
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
      <div class="button-row">
        <button type="submit">Search</button>
        <button class="secondary" type="button" onclick={resetDemo}>Demo</button>
      </div>
    </form>

    <div class="button-row tools">
      <button class="secondary" type="button" onclick={tryUnknown}>Probe unknown code</button>
      <button class="secondary" type="button" onclick={tryBrake}>Probe brake refusal</button>
      <button class="secondary" type="button" onclick={downloadProject}>Save .oparts.json</button>
      <label class="file-btn secondary">
        Load .oparts.json
        <input type="file" accept=".json,application/json" onchange={onImport} />
      </label>
    </div>

    <label class="notes">
      Local notes (saved only in your .oparts.json)
      <textarea bind:value={notes} rows="3" placeholder="Optional notes stay on your machine"></textarea>
    </label>

    {#if fileMessage}
      <p class="meta">{fileMessage}</p>
    {/if}

    {#if result}
      <div class="results" aria-live="polite">
        <p class="meta status-line status-{result.status}">
          Status: <strong class="mono">{result.status}</strong>
          {#if result.messages.length}
            — {result.messages.join(' ')}
          {/if}
        </p>

        {#if result.status === 'unknown-code'}
          <div class="hit hit-miss">
            <strong>No match</strong>
            <p class="meta">
              Open Parts refuses to invent an equivalence when the catalog has no
              evidence.
            </p>
          </div>
        {:else if result.status === 'blocked'}
          <div class="hit hit-blocked">
            <strong>Advice blocked</strong>
            <p class="meta">
              Every related edge is do-not-advise. Review warnings below; do not
              treat this as a substitution recommendation.
            </p>
          </div>
        {/if}

        {#each result.hits as hit}
          <article class="hit" class:hit-blocked={hit.confidence === 'do-not-advise'}>
            <header>
              <strong class="mono">{hit.part.code}</strong>
              <span class="badge {hit.confidence}">{hit.confidence}</span>
              <span class="meta">{hit.matchedVia}</span>
              <span class="meta">{hit.part.safetyClass}</span>
            </header>
            <div>{hit.part.label} · {hit.part.category} · {hit.part.brand}</div>
            <p class="meta"><strong>Why:</strong> {hit.reason}</p>
            {#if hit.relatedPart}
              <p class="meta">Related to <span class="mono">{hit.relatedPart.code}</span></p>
            {/if}
            {#if hit.provenance}
              <p class="meta">
                Provenance: {hit.provenance.kind} — {hit.provenance.summary}
                {#if hit.provenance.url}
                  · <a href={hit.provenance.url} rel="noreferrer" target="_blank">source</a>
                {/if}
              </p>
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
