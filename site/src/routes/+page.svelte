<script lang="ts">
	import bylines from '../data/bylines.json';
	export let data;

	const work = data.projects.filter((item) => item.meta.type === 'work');
	const play = data.projects.filter((item) => item.meta.type === 'play');
</script>

<div class="container">
	<div>
		<h2>Work</h2>
		{#each work as exploit}
			<div>
				<a href={exploit.path}><h3>{exploit.meta.title}</h3></a>
				<div>{exploit.meta.description}</div>
			</div>
		{/each}
	</div>
	<div>
		<h2>Play</h2>
		{#each play as exploit}
			<div>
				<a href={exploit.path}><h3>{exploit.meta.title}</h3></a>
				<div>{exploit.meta.description}</div>
			</div>
		{/each}
	</div>
	<div>
		<h2>Writings</h2>

		{#each bylines as byline}
			<div class="byline-card">
				<a href={byline.url}><h4>{byline.title}</h4></a>
				<div>{byline.publication}</div>
				<div>{byline.publicationDate}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.byline-card {
		margin-bottom: 1rem;
	}
	@media (min-width: 768px) {
		.container {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
