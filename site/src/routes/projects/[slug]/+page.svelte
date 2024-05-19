<script lang="ts">
	export let data;
</script>

<a href="/projects"><h2>Projects & Experiences</h2></a>

<article>
	<h3>{data.title}</h3>
	<svelte:component this={data.content} />
</article>

<style>
	h2,
	h3 {
		text-align: center;
	}
	h3 {
		font-size: 2rem;
	}
</style>
