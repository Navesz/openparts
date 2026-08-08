<script lang="ts">
  import { getCatalogName, getVehicles, runSearch } from '$lib/search';
  import { createProject, parseProject, serializeProject } from '$lib/domain/projectFile';
  import { categoryImage, heroImage, vehicleImage } from '$lib/media';
  import { pt } from '$lib/i18n/pt';
  import type { SearchResult } from '$lib/domain/types';

  const vehicles = getVehicles();
  const catalogName = getCatalogName();
  const t = pt.search;

  let query = $state('SYN-FAMILY2-OIL-01');
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

  function tryFamily2() {
    query = 'SYN-FAMILY2-OIL-01';
    vehicleId = '';
    search();
  }

  function tryFamily1() {
    query = 'SYN-FAMILY1-THERMO-01';
    vehicleId = '';
    search();
  }

  function tryFamily1O2() {
    query = 'SYN-FAMILY1-O2-01';
    vehicleId = '';
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
    a.download = 'openparts-notas.oparts.json';
    a.click();
    URL.revokeObjectURL(url);
    fileMessage = t.downloaded;
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
      fileMessage = `${t.loadedAt} ${project.savedAt}`;
    } catch (error) {
      fileMessage = error instanceof Error ? error.message : t.importFail;
    } finally {
      input.value = '';
    }
  }

  function categoryLabel(category: string): string {
    return (pt.categories as Record<string, string>)[category] ?? category;
  }

  search();
</script>

<main class="shell">
  <section class="hero hero-with-media">
    <div>
      <p class="meta mono">{t.eyebrow} · {catalogName}</p>
      <h1 class="brand">{t.title}</h1>
      <p class="lede">{t.lede}</p>
      <div class="banner" role="note">{t.banner}</div>
      <p class="meta">{t.efiNote}</p>
    </div>
    <figure class="hero-figure">
      <img src={heroImage()} alt="Atmosfera de oficina com sedã estilo Vectra" />
    </figure>
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
        {t.codeLabel}
        <input bind:value={query} placeholder={t.codePlaceholder} autocomplete="off" />
      </label>
      <label>
        {t.vehicleLabel}
        <select bind:value={vehicleId}>
          <option value="">{t.allVehicles}</option>
          {#each vehicles as v}
            <option value={v.id}
              >{v.model}
              {v.generation} ({v.years}){v.platformFamily ? ` · ${v.platformFamily}` : ''}</option
            >
          {/each}
        </select>
      </label>
      <div class="button-row">
        <button type="submit">{t.search}</button>
        <button class="secondary" type="button" onclick={resetDemo}>{t.demo}</button>
      </div>
    </form>

    <div class="button-row tools">
      <button class="secondary" type="button" onclick={tryFamily2}>{t.tryFamily2}</button>
      <button class="secondary" type="button" onclick={tryFamily1}>{t.tryFamily1}</button>
      <button class="secondary" type="button" onclick={tryFamily1O2}>{t.tryFamily1O2}</button>
      <button class="secondary" type="button" onclick={tryUnknown}>{t.probeUnknown}</button>
      <button class="secondary" type="button" onclick={tryBrake}>{t.probeBrake}</button>
      <button class="secondary" type="button" onclick={downloadProject}>{t.saveProject}</button>
      <label class="file-btn secondary">
        {t.loadProject}
        <input type="file" accept=".json,application/json" onchange={onImport} />
      </label>
    </div>

    <label class="notes">
      {t.notesLabel}
      <textarea bind:value={notes} rows="3" placeholder={t.notesPlaceholder}></textarea>
    </label>

    {#if fileMessage}
      <p class="meta">{fileMessage}</p>
    {/if}

    {#if result}
      <div class="results" aria-live="polite">
        <p class="meta status-line status-{result.status}">
          {t.status}: <strong class="mono">{result.status}</strong>
          {#if result.messages.length}
            — {result.messages.join(' ')}
          {/if}
        </p>

        {#if result.status === 'unknown-code'}
          <div class="hit hit-miss">
            <strong>{t.noMatchTitle}</strong>
            <p class="meta">{t.noMatchBody}</p>
          </div>
        {:else if result.status === 'blocked'}
          <div class="hit hit-blocked">
            <strong>{t.blockedTitle}</strong>
            <p class="meta">{t.blockedBody}</p>
          </div>
        {/if}

        {#each result.hits as hit}
          <article class="hit hit-media" class:hit-blocked={hit.confidence === 'do-not-advise'}>
            <img
              class="cat-icon"
              src={categoryImage(hit.part.category)}
              alt=""
              width="56"
              height="56"
            />
            <div>
              <header>
                <strong class="mono">{hit.part.code}</strong>
                <span class="badge {hit.confidence}">{hit.confidence}</span>
                <span class="meta">{hit.matchedVia}</span>
                <span class="meta">{hit.part.safetyClass}</span>
              </header>
              <div>
                {hit.part.label} · {categoryLabel(hit.part.category)} · {hit.part.brand}
              </div>
              <p class="meta"><strong>{t.why}:</strong> {hit.reason}</p>
              {#if hit.applications.length}
                <div class="apps">
                  <strong class="meta">{t.applications}:</strong>
                  <ul class="app-list" aria-label={t.applications}>
                    {#each hit.applications as app}
                      <li>
                        <img
                          src={vehicleImage(app.model, app.generation)}
                          alt=""
                          width="72"
                          height="32"
                          role="presentation"
                        />
                        <span
                          >{app.make}
                          {app.model}
                          {app.generation} ({app.years}){#if app.platformFamily}
                            · {app.platformFamily}{/if}</span
                        >
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}
              {#if hit.relatedPart}
                <p class="meta">{t.relatedTo} <span class="mono">{hit.relatedPart.code}</span></p>
              {/if}
              {#if hit.provenance}
                <p class="meta">
                  {t.provenance}: {hit.provenance.kind} — {hit.provenance.summary}
                  {#if hit.provenance.url}
                    · <a href={hit.provenance.url} rel="noreferrer" target="_blank">{t.source}</a>
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
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </section>

  <section class="vehicles">
    <h2>{t.vehiclesHeading}</h2>
    <div class="vehicle-grid">
      {#each vehicles as v}
        <article class="panel vehicle">
          <img
            class="vehicle-art"
            src={vehicleImage(v.model, v.generation)}
            alt="Silhueta {v.model} {v.generation}"
          />
          <strong>{v.make} {v.model} {v.generation}</strong>
          <div class="meta">
            {v.years} · {v.market}{#if v.platformFamily}
              · {v.platformFamily}{/if}
          </div>
          <p>{v.notes}</p>
        </article>
      {/each}
    </div>
  </section>
</main>
