import type { ProjectDetails } from '$lib/types/types';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/projects`);
	const projects: {
		projects: {
			meta: ProjectDetails;
			path: string;
		}[];
	} = await response.json();

	return {
		projects
	};
};
