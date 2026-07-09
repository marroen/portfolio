<!-- +page.svelte -->
<script lang="ts">
	let { data } = $props();
  import HeroSection from '$lib/components/HeroSection.svelte';
	import ProjectsCarousel from '$lib/components/ProjectsCarousel.svelte';
</script>

<HeroSection />

<!-- <ProjectsCarousel projectt={data.projects[0]} /> -->