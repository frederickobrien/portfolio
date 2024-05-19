<script lang="ts">
	export let data;
</script>

<a href="/weblog"><h2>Weblog</h2></a>

<article>
	<h3>{data.title}</h3>
	<div class="date"><time datetime={data.date}>{data.date}</time></div>
	<svelte:component this={data.content} />
</article>

<style>
	h2,
	h3,
	.date {
		text-align: center;
	}
	h3 {
		font-size: 2rem;
		line-height: 1.2;
		margin-bottom: 0.5rem;
	}
</style>
