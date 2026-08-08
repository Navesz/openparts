<script lang="ts">
  import { base } from '$app/paths';
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
  <nav aria-label="Primary">
    <a href="{base}/">Search</a>
    <a href="{base}/catalog/">Catalog</a>
    <a href="{base}/about/">About</a>
  </nav>
</div>

<slot />

<footer class="site-footer">
  <p>
    Alpha · Chevrolet Vectra BR fixtures ·
    <a href="https://github.com/Navesz/openparts">GitHub</a>
    · not a fitment guarantee
  </p>
</footer>
