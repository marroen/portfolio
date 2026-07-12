<script lang="ts">
	import { urlFor } from '$lib/sanity';
  import { onMount, tick } from 'svelte';
  import { fade, fly } from 'svelte/transition';

	let { data } = $props();
</script>

<div in:fly={{ y: 50, duration: 800 }} class="text-center md:text-left">
  <div class="max-w-7xl mx-auto px-8 py-24">
    {#each data.projects as project, i}
      <section
        class="grid lg:grid-cols-[1.3fr_1fr] gap-20 items-center min-h-[80vh]"
        id="project-exhibition"
      >
        <!-- IMAGE -->
        <div class:lg:order-2={i % 2 === 1}>
          <img
            src={urlFor(project.thumbnail).width(1200).url()}
            alt={project.name}
            class="w-full rounded-2xl object-cover"
          />
        </div>

        <!-- TEXT -->
        <div class:lg:order-1={i % 2 === 1}>
          <h2 class="text-5xl font-bold mb-6">
            {project.name}
          </h2>

          <p class="text-lg text-zinc-400 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This will eventually come from Sanity.
          </p>

          <a
            href="/work/immersive-seating"
            class="inline-flex items-center gap-2 text-[#ffbd59] hover:gap-4 transition-all"
          >
            View project →
          </a>
        </div>
      </section>
    {/each}
  </div>
</div>