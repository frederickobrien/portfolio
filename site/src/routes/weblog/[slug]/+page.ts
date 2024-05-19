import type { WeblogDetails } from '$lib/types/types.js';

export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date }: WeblogDetails = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
