<script lang="ts">
  let embedEl: HTMLDivElement;

  function onIframeLoad() {
  const top = embedEl?.getBoundingClientRect().top + window.scrollY - 130;
  window.scrollTo({ top, behavior: 'smooth' });
}
</script>

<section class="pt-24 pb-20 max-w-6xl mx-auto px-4">
  <a href="/" class="text-sm mb-6 inline-block" style="color:#b93241">← Back</a>
  <h1 class="text-4xl font-bold mb-4">Immersive Seating</h1>

  <div bind:this={embedEl} class="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
    <iframe
      src="/immersive-seating/index.html"
      title="Immersive Seating"
      allow="fullscreen"
      class="w-full h-full border-none"
      onload={onIframeLoad}
    />
  </div>

  <p class="text-gray-500 dark:text-gray-400 mb-8">Interactive 360° concert seat selector built in Unity, embedded on web.</p>
</section>