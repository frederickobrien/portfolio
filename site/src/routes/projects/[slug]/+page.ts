import type { ProjectDetails } from '$lib/types/types.js';

export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const metadata: ProjectDetails = post.metadata;
	const content = post.default;

	return {
		...metadata,
		content
	};
}
