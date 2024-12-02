<script lang="ts">
	import BylineCard from '$lib/components/BylineCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { BylineDetails } from '$lib/types/types.js';

	let { data } = $props();
	const recentWritings: BylineDetails[] = data.writings.slice(0, 15);
</script>

<svelte:head>
	<title>Frederick O'Brien</title>
	<meta name="description" content="Home page" />
</svelte:head>

<div class="homepage-container">
	<div>
		<h2>Work</h2>
		<div class="project-list">
			{#each data.highlightedWorkProjects as project}
				<ProjectCard {...project} />
			{/each}
		</div>

		<div class="see-more-link">
			<a href="/projects-and-experiences">See all</a>→
		</div>
	</div>
	<div>
		<h2>Play</h2>
		<div class="project-list">
			{#each data.highlightedPlayProjects as project}
				<ProjectCard {...project} />
			{/each}
		</div>
		<div class="see-more-link">
			<a href="/projects-and-experiences">See all</a>→
		</div>
	</div>
	<div>
		<h2>Writings</h2>

		{#each recentWritings as byline}
			<BylineCard
				title={byline.title}
				publication={byline.publication}
				publicationDate={byline.publicationDate}
				url={byline.url}
				archiveUrl={byline.archiveUrl}
			/>
		{/each}
		<div class="see-more-link">
			<a href="/writings">See all</a>→
		</div>
	</div>
</div>

<style>
	h2 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 1rem;
	}
	.homepage-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.see-more-link {
		text-align: center;
		margin-top: 1rem;
		font-size: 1.2rem;
	}
	.project-list {
		display: grid;
		gap: 2rem;
	}
	@media (min-width: 768px) {
		.homepage-container {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
