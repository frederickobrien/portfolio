<script lang="ts">
	import '$lib/styles/global.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		margin: 1rem auto 0;
		width: 90%;
	}
</style>
