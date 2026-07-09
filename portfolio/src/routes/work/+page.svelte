<script lang="ts">
  let { data } = $props();
  import { urlFor } from '$lib/sanity';
</script>

<section class="pt-24 pb-20 max-w-6xl mx-auto px-4">
  <h1 class="text-4xl font-bold mb-12">My Work</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each data.projects as project}
      <a href="/work/immersive-seating" class="group block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
        {#if project.thumbnail}
          <img src={urlFor(project.thumbnail).width(600).url()} alt={project.title} class="w-full h-48 object-cover" />
        {/if}
        <div class="p-5">
          <h2 class="text-xl font-semibold">{project.title}</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.description ?? ''}</p>
          <span class="mt-3 inline-block text-sm font-medium" style="color:#b93241">View project →</span>
        </div>
      </a>
    {/each}
  </div>
</section>