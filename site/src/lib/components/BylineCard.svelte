<script lang="ts">
	export let title;
	export let publication;
	export let publicationDate;
	export let url;
	export let archiveUrl;
	export let contentType;
	export let soleAuthor;

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
