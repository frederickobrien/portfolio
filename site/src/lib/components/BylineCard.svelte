<script lang="ts">
	import type { BylineDetails } from '$lib/types/types';

	const {
		title,
		publication,
		publicationDate,
		url,
		archiveUrl,
		contentType,
		soleAuthor
	}: BylineDetails = $props();

	const urlToUse = publication === 'Citizen Obsessed' ? archiveUrl : url;
</script>

<div class="byline-card">
	<a href={urlToUse}><h4>{title}</h4></a>
	{#if publication === 'Weblog'}
		<a href={`/weblog`}>{publication}</a>
	{:else}
		<i>{publication}</i>
	{/if}, {publicationDate}
</div>

<style>
	.byline-card {
		margin-bottom: 1rem;
	}
	h4 {
		font-size: 1.5rem;
		margin-bottom: 0.3rem;
	}
</style>
