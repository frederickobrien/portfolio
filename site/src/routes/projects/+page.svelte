<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	export let data;
</script>

<h2>Projects & Experiences</h2>

{#each data.projects as exploit}
	<ProjectCard {...exploit} />
{/each}
