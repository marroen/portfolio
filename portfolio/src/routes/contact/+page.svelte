<script lang="ts">
  import { fade, fly } from 'svelte/transition';

</script>

<section class="min-h-screen flex items-center jstify-center pt-16">
  <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
    <div in:fly={{ y: 50, duration: 800 }} class="text-center md:text-left">
      <h1 class="text-5xl md:text-7xl font-extrabold">Get in touch</h1>
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
        I'm currently open to design and development projects,
        and freelance work in XR, Unity, and computer vision. If any of my work caught your attention, I'd love to hear from you.
      </p>
      <div class="flex flex-col gap-4">
        <a href="mailto:ronningmartin@outlook.com" class="text-sm font-medium hover:underline" style="color:#b93241">ronningmartin@outlook.com</a>
        <a href="https://linkedin.com/in/ronningmartin" target="_blank" rel="noopener noreferrer" class="text-sm font-medium hover:underline" style="color:#b93241">linkedin.com/in/ronningmartin</a>
        <a href="https://github.com/marroen" target="_blank" rel="noopener noreferrer" class="text-sm font-medium hover:underline" style="color:#b93241">github.com/marroen</a>
      </div>
    </div>
  </div>
</section>

<section class="pt-24 pb-20 max-w-2xl mx-auto px-4">
  <h1 class="text-4xl font-bold mb-6">Get in touch</h1>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
    I'm currently open to PhD collaborations, design and development projects,
    and freelance work in XR, Unity, and computer vision. If something I've built
    or written resonates with you, I'd love to hear from you.
  </p>
  <div class="flex flex-col gap-4">
    <a href="mailto:ronningmartin@outlook.com" class="text-sm font-medium hover:underline" style="color:#b93241">ronningmartin@outlook.com</a>
    <a href="https://linkedin.com/in/ronningmartin" target="_blank" rel="noopener noreferrer" class="text-sm font-medium hover:underline" style="color:#b93241">linkedin.com/in/ronningmartin</a>
  </div>
</section>