export const stringifyDateRange = (dateStarted: Date, dateFinished: Date | null) => {
	const startedYear = new Date(dateStarted).getFullYear();
	const finishedYear = dateFinished ? new Date(dateFinished).getFullYear() : null;
	if (!finishedYear) {
		return `${startedYear}–present`;
	} else if (finishedYear && startedYear === finishedYear) {
		return startedYear;
	} else return `${startedYear}–${finishedYear}`;
};
