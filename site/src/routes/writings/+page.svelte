<script lang="ts">
	import BylineCard from '$lib/components/BylineCard.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>Writings | Frederick O'Brien</title>
	<meta name="description" content="Just about all the things I've written over the years." />
</svelte:head>

<section>
	<h2>Writings</h2>

	{#each data.writings as byline}
		<BylineCard {...byline} />
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
