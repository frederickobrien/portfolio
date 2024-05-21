<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.title} | Projects & Experiences | Frederick O'Brien</title>
	<meta name="description" content={data.description} />
</svelte:head>

<article>
	<h2>{data.title}</h2>
	<svelte:component this={data.content} />
</article>

<style>
	h2 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 1rem;
	}
</style>
