<script lang="ts">
	import { stringifyDateRange } from '$lib/utils/prettifiers.js';

	let { data } = $props();

	const hrefLink = (link: string) => `https://${link}`;
</script>

<svelte:head>
	<title>{data.title} | Projects & Experiences | Frederick O'Brien</title>
	<meta name="description" content={data.description} />
</svelte:head>

<article>
	<h2>{data.title}</h2>
	{#if data.link}
		<div class="link">
			<a href={hrefLink(data.link)} target="_blank" rel="noopener noreferrer">{data.link}</a>
		</div>
	{/if}
	<div class="time-range">{stringifyDateRange(data.dateStarted, data.dateFinished)}</div>
	<data.content />
</article>

<style>
	h2 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 1rem;
	}
	.time-range,
	.link {
		text-align: center;
		margin-bottom: 1rem;
	}
	.link {
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>
