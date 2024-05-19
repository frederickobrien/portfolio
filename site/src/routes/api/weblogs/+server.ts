import { fetchWeblogPosts } from '$lib/utils/fetch-markdown-posts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchWeblogPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return Number(new Date(b.meta.date)) - Number(new Date(a.meta.date));
	});

	return json(sortedPosts);
};
