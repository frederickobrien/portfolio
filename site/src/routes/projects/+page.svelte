<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>Projects & Experiences | Frederick O'Brien</title>
	<meta name="description" content="Things what I've done." />
</svelte:head>

<section>
	<h2>Projects & Experiences</h2>

	{#each data.projects as exploit}
		<ProjectCard {...exploit} />
	{/each}
</section>

<style>
	h2 {
		text-align: center;
		margin-bottom: 2rem;
	}
	section {
		max-width: 800px;
		margin: 0 auto;
	}
</style>
