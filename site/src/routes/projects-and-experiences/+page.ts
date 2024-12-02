import type { ProjectObject } from '$lib/types/types';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/projects-and-experiences`);
	const projects: ProjectObject[] = await response.json();

	return {
		projects
	};
};
