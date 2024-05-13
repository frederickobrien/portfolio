<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<Header />

<main>
	{@render children()}
</main>

<Footer />

<style>
	main {
		margin: 2rem auto 0;
		width: 95%;
	}
</style>
