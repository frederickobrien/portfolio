import type { ProjectDetails } from '$lib/types/types.js';

export const load = async ({ fetch }) => {
	const projectsResponse = await fetch(`/api/projects`);
	const projects: {
		meta: ProjectDetails;
		path: string;
	}[] = await projectsResponse.json();
	const writingsResponse = await fetch(`/api/writings`);
	const writings = await writingsResponse.json();

	return {
		projects,
		writings
	};
};
