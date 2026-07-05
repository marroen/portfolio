<script lang="ts">
  import {DotLottieSvelte} from '@lottiefiles/dotlottie-svelte';
  import { fade, fly } from 'svelte/transition';
  let animSrc = '/animations/cam1.lottie';

  function handleNameCopy(e: ClipboardEvent) {
    const text = window.getSelection()?.toString() ?? '';
    if (text.includes('Ronning')) {
      e.preventDefault();
      e.clipboardData?.setData('text/plain', text.replace(/Ronning/g, 'Rønning'));
    }
  }

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
      <h1 class="text-5xl md:text-7xl font-extrabold" aria-label="Martin Rønning" oncopy={handleNameCopy}>
        <span class="flex flex-wrap gap-x-3 justify-center md:justify-start text-transparent bg-clip-text" style="background-image: linear-gradient(to right, #ffbd59, #b93241)">
          <span class="whitespace-nowrap">Martin</span>
          <span class="whitespace-nowrap">R<span class="o-slash">o</span>nning</span>
        </span> 
      </h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
        Full-stack developer producing experiences with Svelte and Unity.
      </p>
      <div class="mt-8 flex gap-4 justify-center md:justify-start">
        <a href="#projects" class="px-6 py-3 text-white rounded-full transition" style="background:#b93241;">See my work</a>
        <a href="#contact" class="secondary-btn">Contact</a>
      </div>
    </div>
  </div>
</section>
<style>
  .secondary-btn {
    padding: 0.75rem 1.5rem;
    border: 2px solid #b93241;
    color: #b93241;
    border-radius: 9999px;
    transition: 0.2s;
  }
  .secondary-btn:hover {
    background: rgba(255, 189, 89, 0.15);
  }
  .dark .secondary-btn:hover {
    background: rgba(255, 189, 89, 0.08);
  }
  .o-slash {
    position: relative;
    display: inline-block;
  }

  .o-slash [aria-hidden] {
    user-select: none;
  }
  
  .o-slash::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 60%;
    width: 0.95em;
    height: 0.12em;
    border-radius: 999px;
    background: linear-gradient(to right, #b93241, #ffbd59);
    transform: translate(-50%, -50%) rotate(-60deg) scaleX(0);
    animation: strike 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: 1.5s;
  }

  @keyframes strike {
    to {
      transform: translate(-50%, -50%) rotate(-60deg) scaleX(1);
    }
  }
</style>
