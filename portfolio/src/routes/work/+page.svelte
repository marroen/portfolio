<script lang="ts">
  import { urlFor } from '$lib/sanity';
  import { fly } from 'svelte/transition';

  let { data } = $props();
</script>

<div in:fly={{ y: 50, duration: 800 }}>
  <div class="max-w-7xl mx-auto px-6 py-24">
    {#each data.projects as project, i}
      <section class="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-20 items-center min-h-[80vh] py-12 lg:py-0">

        <div class="{i % 2 === 1 ? 'lg:order-2' : ''}">
          <img src={urlFor(project.thumbnail).width(1200).url()} alt={project.name} class="w-full rounded-2xl object-cover max-h-[45vh] lg:max-h-[70vh]" />
        </div>

        <div class="text-left {i % 2 === 1 ? 'lg:order-1' : ''}">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">{project.name}</h2>
          <p class="text-lg text-zinc-400 leading-relaxed mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. This will eventually come from Sanity.</p>
          <a href="/work/immersive-seating" class="inline-flex items-center gap-2 text-[#ffbd59] hover:gap-4 transition-all">View project →</a>
        </div>

      </section>
    {/each}
  </div>
</div>