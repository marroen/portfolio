<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import { PortableText } from '@portabletext/svelte';

  let iframeEl: HTMLIFrameElement;
  let embedEl: HTMLDivElement;
  let isFakeFullscreen = $state(false);
  let isNativeFullscreen = $state(false);
  let unityLoaded = $state(false);

  /* function onIframeLoad() {
    const top = embedEl?.getBoundingClientRect().top + window.scrollY - 130;
    window.scrollTo({ top, behavior: 'smooth' });
  } */
  
  onMount(async () => {
    
      await tick();

      requestAnimationFrame(() => {
          window.scrollTo({
              top: 90,
              behavior: 'smooth'
          });
      });

      document.addEventListener('fullscreenchange', onFullscreenChange);
      window.addEventListener('message', onMessage);
  });

  function onMessage(e: MessageEvent) {
    if (e.data?.type === 'unity-ready') unityLoaded = true;
  }

  function goFullscreen() {
    if (embedEl?.requestFullscreen) {
      embedEl.requestFullscreen();
    } else {
      isFakeFullscreen = true;
      document.body.style.overflow = 'hidden';
    }
  }

  function exitNativeFullscreen() {
    document.exitFullscreen();
  }

  function exitFakeFullscreen() {
    isFakeFullscreen = false;
    document.body.style.overflow = '';
  }

  function onFullscreenChange() {
    isNativeFullscreen = !!document.fullscreenElement;
  }

  /*
  onMount(() => {
    document.addEventListener('fullscreenchange', onFullscreenChange);
    window.addEventListener('message', onMessage);
  }); */

  onDestroy(() => {
    document.removeEventListener('fullscreenchange', onFullscreenChange);
    window.removeEventListener('message', onMessage);
  });

  import { page } from '$app/stores';
  const description = $page.state.deepDescription;
</script>

<section class="pt-24 pb-20 max-w-6xl mx-auto px-4">
  <a href="/work" class="text-sm mb-6 inline-block" style="color:#b93241">← Back</a>
  <h1 class="text-4xl font-bold mb-4">ImmersiveSeating</h1>
  <div
    bind:this={embedEl}
    class="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl"
    class:fake-fullscreen={isFakeFullscreen}
  >
    {#if !unityLoaded}
      <div class="absolute inset-0 flex items-center justify-center bg-gray-900 z-20">
        <p class="text-white text-sm tracking-widest uppercase animate-pulse">Loading...</p>
      </div>
    {/if}


    <iframe
      bind:this={iframeEl}
      src="/immersive-seating/index.html"
      title="Immersive Seating"
      allow="fullscreen"
      allowfullscreen
      class="w-full h-full border-none"
    />

    {#if isNativeFullscreen}
      <button
        onclick={exitNativeFullscreen}
        class="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm transition z-10"
      >
        ✕ Exit
      </button>
    {:else if !isFakeFullscreen}
      <button
        onclick={goFullscreen}
        class="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm transition z-10"
      >
        ⛶ Fullscreen
      </button>
    {/if}
  </div>

  {#if isFakeFullscreen}
    <button
      onclick={exitFakeFullscreen}
      style="position: fixed; bottom: 12px; right: 12px; z-index: 10000;"
      class="bg-black/50 hover:bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm transition"
    >
      ✕ Exit
    </button>
  {/if}

  <div class="prose dark:prose-invert prose-a:text-[#b93241] mt-4 text-sm text-gray-500">
    <PortableText value={description} />
  </div>
</section>

<style>
  .fake-fullscreen {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    border-radius: 0;
    aspect-ratio: unset;
  }
</style>