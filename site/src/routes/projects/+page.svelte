<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>Projects & Experiences | Frederick O'Brien</title>
	<meta name="description" content="Things what I've done." />
</svelte:head>

<section>
	<h2>Projects & Experiences</h2>

	{#each data.projects as project}
		<ProjectCard {...project} />
	{/each}
</section>

<style>
	h2 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 1rem;
	}
	section {
		max-width: 800px;
		margin: 0 auto;
	}
</style>
