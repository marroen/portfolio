
<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ProjectsCarousel from '$lib/components/ProjectsCarousel.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
	<NavBar />
	<HeroSection />
	<AboutSection />
	<ProjectsCarousel />
	<main>
		{@render children()}
	</main>
</div>