<script lang="ts">
	import taglines from '../../data/taglines.json';

	const tagline = taglines[Math.floor(Math.random() * taglines.length)];

	const navSections = [
		{ title: 'About', href: '/about' },
		{ title: 'Projects & Experiences', href: '/projects' },
		{ title: 'Writings', href: '/writings' }
	];
</script>

<header>
	<div class="header-content">
		<a href="/"><h1>Frederick O'Brien</h1></a>

		<div>{tagline}</div>

		<nav>
			<ul>
				{#each navSections as { title, href }}
					<li><a {href}>{title}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.header-content {
		max-width: 800px;
		padding: 1rem;
	}

	nav {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	ul {
		display: flex;
		list-style-type: none;
		padding: 0;
		column-gap: 1rem;
	}
</style>
