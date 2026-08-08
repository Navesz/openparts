<script lang="ts">
  import {
    getCatalogDescription,
    getCatalogName,
    listEquivalences,
    listParts,
    getVehicles
  } from '$lib/search';

  const name = getCatalogName();
  const description = getCatalogDescription();
  const parts = listParts();
  const edges = listEquivalences();
  const vehicles = getVehicles();
</script>

<main class="shell">
  <section class="hero">
    <h1 class="brand">Catalog</h1>
    <p class="lede">{name}: {description}</p>
  </section>

  <section class="panel">
    <h2>Parts ({parts.length})</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Label</th>
            <th>Category</th>
            <th>Safety</th>
            <th>Vehicles</th>
          </tr>
        </thead>
        <tbody>
          {#each parts as p}
            <tr>
              <td class="mono">{p.code}</td>
              <td>{p.label}</td>
              <td>{p.category}</td>
              <td>{p.safetyClass}</td>
              <td class="mono">{p.fitsVehicleIds.join(', ')}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>

  <section class="panel" style="margin-top:1rem;">
    <h2>Equivalences ({edges.length})</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Confidence</th>
            <th>Reason</th>
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
    <h2>Vehicles</h2>
    {#each vehicles as v}
      <article class="panel vehicle">
        <strong>{v.id}</strong>
        <p>{v.notes}</p>
      </article>
    {/each}
  </section>
</main>
