<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { ProjectObject } from '$lib/types/types.js';

	let { data } = $props();

	let activeFilter = $state('all');

	const filterDisplayedProjects = (type: string, allProjects: ProjectObject[]) => {
		if (type === 'all') return allProjects;
		return allProjects.filter((project: ProjectObject) => project.meta.type === type);
	};

	let displayedProjects = $derived(filterDisplayedProjects(activeFilter, data.projects));

	const filters = ['all', 'work', 'play'];
</script>

<svelte:head>
	<title>Projects & Experiences | Frederick O'Brien</title>
	<meta name="description" content="Things what I've done." />
</svelte:head>

<section>
	<h2>Projects & Experiences</h2>

	<div class="filters-container">
		{#each filters as filter}
			<div
				class={`filter-button ${activeFilter === filter ? 'active' : ''}`}
				role="button"
				tabindex="0"
				onclick={() => (activeFilter = filter)}
				onkeydown={() => (activeFilter = filter)}
			>
				{filter.charAt(0).toUpperCase() + filter.slice(1)}
			</div>
		{/each}
	</div>

	<div class="projects-container">
		{#each displayedProjects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>

<style>
	h2 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 2rem;
	}
	section {
		max-width: 800px;
		margin: 0 auto;
	}
	.projects-container {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	.filters-container {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 2rem;
		justify-content: center;
	}
	.filter-button {
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		cursor: pointer;
		&:hover {
			opacity: 0.9;
		}
	}
	.active {
		background-color: #000;
		color: #fff;
	}
	@media (min-width: 768px) {
		.projects-container {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 1rem;
		}
	}
</style>
