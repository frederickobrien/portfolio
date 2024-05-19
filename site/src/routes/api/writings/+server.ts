import { json } from '@sveltejs/kit';
import { fetchWeblogPosts } from '$lib/utils/fetch-markdown-posts';
import bylines from '../../../data/bylines.json';
import type { BylineDetails } from '$lib/types/types';

export const GET = async () => {
	const allWeblogPosts = await fetchWeblogPosts();

	const formattedWeblogPosts: BylineDetails[] = allWeblogPosts.map((post) => {
		return {
			title: post.meta.title,
			publication: 'Weblog',
			publicationDate: post.meta.date,
			url: `https://frederickobrien.com${post.path}`,
			archiveUrl: '',
			contentType: 'weblog',
			soleAuthor: true
		};
	});

	const combinedAndSortedWritings: BylineDetails[] = formattedWeblogPosts
		.concat(bylines)
		.sort((a, b) => Number(new Date(b.publicationDate)) - Number(new Date(a.publicationDate)));

	return json(combinedAndSortedWritings);
};
