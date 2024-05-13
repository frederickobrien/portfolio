import type { ExploitDetails } from '$lib/types/types.js';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/projects`);
	const projects: {
		meta: ExploitDetails;
		path: string;
	}[] = await response.json();

	return {
		projects
	};
};
