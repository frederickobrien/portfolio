<script lang="ts">
	import details from '../data/details.json';
	import taglines from '../data/taglines.json';

	const tagline = taglines[Math.floor(Math.random() * taglines.length)];
</script>

<header>
	<!-- <img src="/images/self-portrait.jpg" alt="" /> -->

	<a href="/"><h1>Frederick O'Brien</h1></a>

	<div>{tagline}</div>

	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/weblog">Weblog</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		border-radius: 50%;
		width: 100px;
	}

	nav {
		display: flex;
		gap: 1em;
	}

	h1 {
		font-size: 2em;
	}

	ul {
		display: flex;
		list-style-type: none;
		padding: 0;
		column-gap: 1em;
	}
</style>
