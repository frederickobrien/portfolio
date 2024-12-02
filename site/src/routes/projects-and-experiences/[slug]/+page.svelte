<script lang="ts">
	import { stringifyDateRange } from '$lib/utils/prettifiers.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} | Projects & Experiences | Frederick O'Brien</title>
	<meta name="description" content={data.description} />
</svelte:head>

<article>
	<h2>{data.title}</h2>
	<div class="time-range">{stringifyDateRange(data.dateStarted, data.dateFinished)}</div>
	<data.content />
</article>

<style>
	h2 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 1rem;
	}
	.time-range {
		text-align: center;
		margin-bottom: 1rem;
	}
</style>
