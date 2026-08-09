<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { pt } from '$lib/i18n/pt';
  import '../app.css';

  function pathOf(href: string): string {
    return href.replace(/\/$/, '') || '/';
  }

  function isActive(href: string): boolean {
    const current = pathOf($page.url.pathname.replace(base, '') || '/');
    const target = pathOf(href);
    if (target === '/') return current === '/' || current === '';
    return current === target || current.startsWith(`${target}/`);
  }
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

<a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
<div class="topbar">
  <a class="topbrand" href="{base}/">Open Parts</a>
  <nav aria-label="Principal">
    <a href="{base}/" class:active={isActive('/')}>{pt.nav.search}</a>
    <a href="{base}/catalog/" class:active={isActive('/catalog')}>{pt.nav.catalog}</a>
    <a href="{base}/plataformas/" class:active={isActive('/plataformas')}>{pt.nav.platforms}</a>
    <a href="{base}/fontes/" class:active={isActive('/fontes')}>{pt.nav.sources}</a>
    <a href="{base}/about/" class:active={isActive('/about')}>{pt.nav.about}</a>
  </nav>
</div>

<div id="conteudo" tabindex="-1">
  <slot />
</div>
<footer class="site-footer">
  <p>
    {pt.footer} ·
    <a href="https://github.com/Navesz/openparts">GitHub</a>
    ·
    <a href="{base}/creditos/">Créditos das fotos</a>
  </p>
</footer>
