<script lang="ts">
  let iframeEl: HTMLIFrameElement;

  function onIframeLoad() {
    const top = embedEl?.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  let embedEl: HTMLDivElement;

  function goFullscreen() {
    iframeEl?.requestFullscreen();
  }
</script>

<section class="pt-24 pb-20 max-w-6xl mx-auto px-4">
  <a href="/" class="text-sm mb-6 inline-block" style="color:#b93241">← Back</a>
  <h1 class="text-4xl font-bold mb-4">Immersive Seating</h1>
  <p class="text-gray-500 dark:text-gray-400 mb-8">Interactive 360° concert seat selector built in Unity, embedded on web.</p>

  <div bind:this={embedEl} class="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
    <iframe
      bind:this={iframeEl}
      src="/immersive-seating/index.html"
      title="Immersive Seating"
      allow="fullscreen"
      allowfullscreen
      class="w-full h-full border-none"
      onload={onIframeLoad}
    />
    <button
      onclick={goFullscreen}
      class="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm transition"
    >
      ⛶ Fullscreen
    </button>
  </div>

  <div class="mt-4 text-sm text-gray-400 text-center">Click and drag to look around · Click a section to zoom in · Double-tap to reset</div>
</section>