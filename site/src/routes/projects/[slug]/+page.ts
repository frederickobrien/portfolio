import type { ExploitDetails } from '$lib/types/types.js';

export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const {
		title,
		description,
		role,
		type,
		link,
		dateStarted,
		dateFinished,
		heroImage,
		heroImageAlt
	}: ExploitDetails = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		description,
		role,
		type,
		link,
		dateStarted,
		dateFinished,
		heroImage,
		heroImageAlt
	};
}
