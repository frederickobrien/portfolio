<script lang="ts">
	import BylineCard from '$lib/components/BylineCard.svelte';

	const { data } = $props();
</script>

<h2>Writings</h2>

{#each data.writings as byline}
	<BylineCard {...byline} />
{/each}
