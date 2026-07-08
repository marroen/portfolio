<script lang="ts">
  import { inview } from 'svelte-inview';
  import { animate } from 'motion';

  let el: HTMLElement;
  let hasAnimated = false;

  function onInView() {
    if (!hasAnimated && el) {
      animate(el, { opacity: [0, 1], y: [40, 0] }, { duration: 0.6 });
      hasAnimated = true;
    }
  }
</script>

<section id="about" class="py-20">
  <div class="max-w-4xl mx-auto px-4">
    <div use:inview={{ unobserveOnEnter: true }} on:inview={onInView} bind:this={el}>
      <h2 class="text-3xl font-bold mb-6">About me</h2>
      <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
        I'm a ... bla ... bla
      </p>
    </div>
  </div>
</section>
