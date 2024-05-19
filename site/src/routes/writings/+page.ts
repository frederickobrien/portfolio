export const load = async ({ fetch }) => {
	const response = await fetch(`/api/writings`);
	const writings = await response.json();

	return {
		writings
	};
};
