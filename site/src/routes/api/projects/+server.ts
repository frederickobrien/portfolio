import { fetchExploitPosts as fetchProjectPosts } from '$lib/utils/fetch-markdown-posts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchProjectPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return Number(new Date(b.meta.dateStarted)) - Number(new Date(a.meta.dateStarted));
	});

	return json(sortedPosts);
};
