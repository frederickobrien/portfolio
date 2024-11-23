import type { BylineDetails } from '$lib/types/types.js';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/writings`);
	const writings: BylineDetails[] = await response.json();

	return {
		writings
	};
};
