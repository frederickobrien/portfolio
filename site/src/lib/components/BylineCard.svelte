<script lang="ts">
	const {
		title,
		publication,
		publicationDate,
		url,
		archiveUrl
	}: {
		title: string;
		publication: string;
		publicationDate: string;
		url: string;
		archiveUrl: string;
	} = $props();

	// const urlToUse = publication === 'Citizen Obsessed' ? archiveUrl : url;
</script>

<div class="byline-card">
	<a href={url}><h4>{title}</h4></a>
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
		line-height: 1.2;
	}
</style>
