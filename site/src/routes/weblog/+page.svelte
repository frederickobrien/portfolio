<script>
	const { data } = $props();
</script>

<svelte:head>
	<title>Weblog | Frederick O'Brien</title>
	<meta
		name="description"
		content="Things what I've written for my website. Likely of little value."
	/>
</svelte:head>

<div class="container">
	<h2>Weblog</h2>
	<ul>
		{#each data.posts as post}
			<li>
				<h3>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h3>
				{post.meta.date}
			</li>
		{/each}
	</ul>
</div>

<style>
	h2 {
		text-align: center;
		margin-bottom: 1rem;
	}
	.container {
		max-width: 800px;
		margin: 0 auto;
	}
	li {
		margin-bottom: 1rem;
	}
</style>
