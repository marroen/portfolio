<script lang="ts">
  import {DotLottieSvelte} from '@lottiefiles/dotlottie-svelte';
  import { fade, fly } from 'svelte/transition';

  let animSrc = '/animations/cam1.lottie';
</script>

<section class="min-h-screen flex items-center jstify-center pt-16">
  <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">


    <div in:fade={{ delay: 300, duration: 800 }} class="flex justify-center">
      <DotLottieSvelte
        src={animSrc}
        autoplay
        loop
        style="width: 400px; height: 400px;"
      />
    </div>

    <div in:fly={{ y: 50, duration: 800 }} class="text-center md:text-left">
      <h1 class="text-5xl md:text-7xl font-extrabold">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Martin Ronning</span>
      </h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
        Full-stack developer producing experiences with Svelte and Unity.
      </p>
      <div class="mt-8 flex gap-4 justify-center md:justify-start">
        <a href="#projects" class="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">See my work</a>
        <a href="#contact" class="px-6 py-3 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 dark:hover:bg-gray-800 transition">Contact</a>
      </div>
    </div>

  </div>
</section>
