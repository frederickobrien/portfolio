<script lang="ts">
	import BylineCard from '$lib/components/BylineCard.svelte';
	import type { BylineDetails } from '$lib/types/types';

	export let data: {
		writings: BylineDetails[];
	};

	$: chosenContentType = 'all';
	$: displayedWritings = data.writings;
</script>

<svelte:head>
	<title>Writings | Frederick O'Brien</title>
	<meta name="description" content="Just about all the things I've written over the years." />
</svelte:head>

<section>
	<h2>Writings</h2>

	<div class="filters-container">
		<div
			class={`filter-button ${chosenContentType === 'all' ? 'active' : ''}`}
			on:click={() => {
				displayedWritings = data.writings;
				chosenContentType = 'all';
			}}
		>
			All
		</div>

		<div
			class={`filter-button ${chosenContentType === 'news' ? 'active' : ''}`}
			on:click={() => {
				displayedWritings = data.writings.filter((writing) => writing.contentType === 'news');
				chosenContentType = 'news';
			}}
		>
			News
		</div>

		<div
			class={`filter-button ${chosenContentType === 'feature' ? 'active' : ''}`}
			on:click={() => {
				displayedWritings = data.writings.filter((writing) => writing.contentType === 'feature');
				chosenContentType = 'feature';
			}}
		>
			Features
		</div>
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
