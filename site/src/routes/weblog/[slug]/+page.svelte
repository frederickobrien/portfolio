<script lang="ts">
	export let data;
</script>

<a href="/weblog"><h2>Weblog</h2></a>

<article>
	<h3>{data.title}</h3>
	<p class="date">{data.date}</p>
	<svelte:component this={data.content} />
</article>

<style>
	h2,
	h3,
	.date {
		text-align: center;
	}
</style>
