<script lang="ts">
  import { heroImage } from '$lib/media';
  import { pt } from '$lib/i18n/pt';
  const t = pt.about;
</script>

<main class="shell">
  <section class="hero hero-with-media">
    <div>
      <h1 class="brand">{t.title}</h1>
      <p class="lede">{t.lede}</p>
    </div>
    <figure class="hero-figure">
      <img src={heroImage()} alt="Foto real de Chevrolet Vectra (Commons, ver créditos)" />
    </figure>
  </section>

  <section class="panel">
    <h2>{t.isTitle}</h2>
    <ul>
      {#each t.isItems as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h2>{t.isNotTitle}</h2>
    <ul>
      {#each t.isNotItems as item}
        <li>{item}</li>
      {/each}
    </ul>

    <h2>{t.safetyTitle}</h2>
    <p>
      {t.safetyBody}
      <span class="badge do-not-advise">do-not-advise</span>
    </p>

    <h2>{t.contributeTitle}</h2>
    <p>
      {t.contributeBody}
      <a href="https://github.com/Navesz/openparts">github.com/Navesz/openparts</a>.
    </p>
  </section>
</main>
