import type { ProjectDetails } from '$lib/types/types.js';

const workProjectsToHighlight = ['The Guardian', 'Smashing Magazine', 'Social Streets'];
const playProjectsToHighlight = ['Gonzo Engineering', 'Audioxide', 'The Whale-Lines'];

export const load = async ({ fetch }) => {
	// Projects
	const projectsResponse = await fetch(`/api/projects-and-experiences`);
	const allProjects: {
		meta: ProjectDetails;
		path: string;
	}[] = await projectsResponse.json();
	const highlightedWorkProjects = allProjects
		.filter((project) => workProjectsToHighlight.includes(project.meta.title))
		.sort((a, b) => {
			return (
				workProjectsToHighlight.indexOf(a.meta.title) -
				workProjectsToHighlight.indexOf(b.meta.title)
			);
		});
	const highlightedPlayProjects = allProjects
		.filter((project) => playProjectsToHighlight.includes(project.meta.title))
		.sort((a, b) => {
			return (
				playProjectsToHighlight.indexOf(a.meta.title) -
				playProjectsToHighlight.indexOf(b.meta.title)
			);
		});

	// Writings
	const writingsResponse = await fetch(`/api/writings`);
	const writings = await writingsResponse.json();

	return {
		highlightedWorkProjects,
		highlightedPlayProjects,
		writings
	};
};
