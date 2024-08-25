<script lang="ts">
	import taglines from '../../../data/taglines.json';
	import HeaderLink from './HeaderLink.svelte';

	const tagline = taglines[Math.floor(Math.random() * taglines.length)];

	const navSections = [
		{ title: 'Projects & Experiences', href: '/projects' },
		{ title: 'Writings', href: '/writings' },
		{ title: 'About', href: '/about' }
	];
</script>

<header>
	<div class="header-content">
		<a href="/"><h1>Frederick O'Brien</h1></a>

		<div class="tagline">{tagline}</div>

		<nav>
			<ul>
				{#each navSections as { title, href }}
					<li><HeaderLink {href} {title} /></li>
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
		padding: 2rem 1rem;
	}

	h1 {
		font-size: 2.2rem;
		margin-bottom: 0;
	}

	.tagline {
		font-family: 'Oswald', sans-serif;
		font-size: 1.2rem;
	}

	nav {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	ul {
		display: flex;
		list-style-type: none;
		padding: 0;
		margin: 0;
		column-gap: 1rem;
	}

	li {
		margin: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
