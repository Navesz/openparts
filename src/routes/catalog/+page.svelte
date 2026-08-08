<script lang="ts">
  import {
    getCatalogDescription,
    getCatalogName,
    listEquivalences,
    listParts,
    getVehicles
  } from '$lib/search';
  import { categoryImage, vehicleImage } from '$lib/media';
  import { pt } from '$lib/i18n/pt';

  const name = getCatalogName();
  const description = getCatalogDescription();
  const parts = listParts();
  const edges = listEquivalences();
  const vehicles = getVehicles();
  const t = pt.catalog;

  function categoryLabel(category: string): string {
    return (pt.categories as Record<string, string>)[category] ?? category;
  }
</script>

<main class="shell">
  <section class="hero">
    <h1 class="brand">{t.title}</h1>
    <p class="lede">{name}: {description}</p>
  </section>

  <section class="panel">
    <h2>{t.parts} ({parts.length})</h2>
    <div class="parts-grid">
      {#each parts as p}
        <article class="part-card">
          <img src={categoryImage(p.category)} alt="" width="48" height="48" />
          <div>
            <strong class="mono">{p.code}</strong>
            <div>{p.label}</div>
            <div class="meta">
              {categoryLabel(p.category)} · {p.safetyClass}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="panel" style="margin-top:1rem;">
    <h2>{t.equivalences} ({edges.length})</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>{t.from}</th>
            <th>{t.to}</th>
            <th>{t.confidence}</th>
            <th>{t.reason}</th>
          </tr>
        </thead>
        <tbody>
          {#each edges as e}
            <tr>
              <td class="mono">{e.fromPartId}</td>
              <td class="mono">{e.toPartId}</td>
              <td><span class="badge {e.confidence}">{e.confidence}</span></td>
              <td>{e.reason}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>

  <section class="vehicles">
    <h2>{t.vehicles}</h2>
    <div class="vehicle-grid">
      {#each vehicles as v}
        <article class="panel vehicle">
          <img class="vehicle-art" src={vehicleImage(v.generation)} alt="" />
          <strong>{v.id}</strong>
          <p>{v.notes}</p>
        </article>
      {/each}
    </div>
  </section>
</main>
