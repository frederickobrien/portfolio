import type { ExploitDetails, WeblogDetails } from '$lib/types/types';

export const fetchWeblogPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/weblog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await (resolver() as Promise<{
				metadata: WeblogDetails;
			}>);
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const fetchExploitPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/projects/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await (resolver() as Promise<{
				metadata: ExploitDetails;
			}>);
			const postPath = path.slice(12, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
