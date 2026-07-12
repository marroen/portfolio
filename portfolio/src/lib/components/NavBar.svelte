<script lang="ts">
  import { isDark, toggle } from '$lib/stores/theme';
  import { Sun, Moon } from 'svelte-heros-v2';
</script>

<nav class="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
  <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
    <a href="/" class="text-xl font-bold">MR</a>
    <div class="flex items-center gap-4 text-sm font-medium">
      <a href="/work" class="hover:text-purple-500 transition">Work</a>
      <a href="/contact" class="hover:text-purple-500 transition">Contact</a>
      <button
        onclick={toggle}
        class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        aria-label="Toggle dark mode"
      >
        {#if $isDark}
          <Sun class="h-5 w-5 text-yellow-400" />
        {:else}
          <Moon class="h-5 w-5 text-gray-700" />
        {/if}
      </button>
    </div>
  </div>
</nav>
