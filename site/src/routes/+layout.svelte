<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
		margin: 1rem auto 0;
		width: 90%;
	}
</style>
