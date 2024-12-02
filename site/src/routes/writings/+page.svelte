<script lang="ts">
	import BylineCard from '$lib/components/BylineCard.svelte';
	import type { BylineDetails } from '$lib/types/types';

	let { data } = $props();

	const filterByContentType = (type: string, allWritings: BylineDetails[]) => {
		if (type === 'all') return allWritings;
		return allWritings.filter((writing) => writing.contentType === type);
	};

	const getTypeCount = (type: string) => {
		if (type === 'all') return data.writings.length;
		return data.writings.filter((writing) => writing.contentType === type).length;
	};

	let chosenContentType: string = $state('all');
	let displayedWritings = $derived(filterByContentType(chosenContentType, data.writings));

	const writingTypes = [
		{ name: 'all', label: 'All' },
		{ name: 'news', label: 'News' },
		{ name: 'feature', label: 'Features' },
		{ name: 'satire', label: 'Satire' },
		{ name: 'weblog', label: 'Weblog' }
	];
</script>

<svelte:head>
	<title>Writings | Frederick O'Brien</title>
	<meta name="description" content="Just about all the things I've written over the years." />
</svelte:head>

<section>
	<h2>Writings</h2>

	<div class="filters-container">
		{#each writingTypes as type}
			<div
				class={`filter-button ${chosenContentType === type.name ? 'active' : ''}`}
				role="button"
				tabindex="0"
				onclick={() => (chosenContentType = type.name)}
				onkeydown={() => (chosenContentType = type.name)}
			>
				{type.label} ({getTypeCount(type.name)})
			</div>
		{/each}
	</div>

	{#each displayedWritings as byline}
		<BylineCard
			title={byline.title}
			publication={byline.publication}
			publicationDate={byline.publicationDate}
			url={byline.url}
			archiveUrl={byline.archiveUrl}
		/>
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
	.filters-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
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
</style>
