<script lang="ts">
  import { base } from '$app/paths';
  import { pt } from '$lib/i18n/pt';
  import '../app.css';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=IBM+Plex+Mono:wght@500&family=Source+Sans+3:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
  <title>Open Parts</title>
</svelte:head>

<div class="topbar">
  <a class="topbrand" href="{base}/">Open Parts</a>
  <nav aria-label="Principal">
    <a href="{base}/">{pt.nav.search}</a>
    <a href="{base}/catalog/">{pt.nav.catalog}</a>
    <a href="{base}/plataformas/">{pt.nav.platforms}</a>
    <a href="{base}/fontes/">{pt.nav.sources}</a>
    <a href="{base}/about/">{pt.nav.about}</a>
  </nav>
</div>

<slot />

<footer class="site-footer">
  <p>
    {pt.footer} ·
    <a href="https://github.com/Navesz/openparts">GitHub</a>
  </p>
</footer>
