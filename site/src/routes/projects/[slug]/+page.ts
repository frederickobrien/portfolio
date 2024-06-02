import type { ProjectDetails } from '$lib/types/types.js';

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
	}: ProjectDetails = post.metadata;
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
