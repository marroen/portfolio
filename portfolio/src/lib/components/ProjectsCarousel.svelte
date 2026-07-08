<script lang="ts">
  import { onMount } from 'svelte';
  import 'swiper/element/bundle';
  import { register } from 'swiper/element/bundle';
  import 'swiper/swiper-bundle.css';


  const projects = [
    { title: 'Project Title', tech: 'Tech1 / Tech2 / Tech3', img: 'https://picsum.photos/600/400?random=1', link: '#' },
    { title: 'Project Title 2', tech: 'Tech1 / Tech2 / Tech3', img: 'https://picsum.photos/600/400?random=1', link: '#' },

  ];

  let swiperEl: HTMLElement;

  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
  };

  onMount(() => {
    register();
    if (swiperEl) {
      Object.assign(swiperEl, params);
      (swiperEl as any).initialize();
    }
  });

</script>

<section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>
    <swiper-container bind:this={swiperEl} init="false" class="w-full max-w-4xl">
      {#each projects as project (project.title)}
        <swiper-slide class="!w-80">
          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
            <img src={project.img} alt={project.title} class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-semibold">{project.title}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-300 mt-1">{project.tech}</p>
              <a href={project.link} class="mt-3 inline-block text-purple-600 hover:underline">View details -></a>
            </div>
          </div>
        </swiper-slide>
      {/each}
    </swiper-container>
  </div>
</section>
