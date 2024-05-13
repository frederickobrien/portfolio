<script>
	export let data;
</script>

<h2>Projects & Experiences</h2>

<ul>
	{#each data.projects as exploit}
		<li>
			<a href={exploit.path}>
				{exploit.meta.title}
			</a>
		</li>
	{/each}
</ul>
