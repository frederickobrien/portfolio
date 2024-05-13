<script>
	export let data;
</script>

<h2>Weblog</h2>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			{post.meta.date}
		</li>
	{/each}
</ul>
