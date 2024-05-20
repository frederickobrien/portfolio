<script lang="ts">
	import { page } from '$app/stores';

	let {
		title,
		href
	}: {
		title: string;
		href: string;
	} = $props();
</script>

<a {href} class:active={$page.url.pathname.includes(href)}>{title}</a>

<style>
	a {
		text-decoration: none;
		font-weight: bold;
		color: inherit;
	}
	a.active {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 2px;
	}
</style>
