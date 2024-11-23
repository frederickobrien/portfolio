<script lang="ts">
	import BylineCard from '$lib/components/BylineCard.svelte';
	import type { BylineDetails } from '$lib/types/types';

	let { data } = $props();

	const filterByContentType = (writings: BylineDetails[] = [], contentType: string) => {
		if (contentType === 'all') return writings;
		else return writings.filter((writing) => writing.contentType === contentType);
	};

	let chosenContentType: string = $state('all');
	let displayedWritings = $derived(filterByContentType(data.writings, chosenContentType));

	const filterButtons = [
		{ name: 'all', label: 'All' },
		{ name: 'news', label: 'News' },
		{ name: 'feature', label: 'Features' },
		{ name: 'satire', label: 'Satire' }
	];
</script>

<svelte:head>
	<title>Writings | Frederick O'Brien</title>
	<meta name="description" content="Just about all the things I've written over the years." />
</svelte:head>

<section>
	<h2>Writings</h2>

	<div class="filters-container">
		{#each filterButtons as button}
			<div
				class={`filter-button ${chosenContentType === button.name ? 'active' : ''}`}
				role="button"
				tabindex="0"
				onclick={() => (chosenContentType = button.name)}
				onkeydown={() => (chosenContentType = button.name)}
			>
				{button.label}
			</div>
		{/each}
	</div>

	{#each displayedWritings as byline}
		<BylineCard {...byline} />
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
