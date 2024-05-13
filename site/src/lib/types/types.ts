export interface WeblogDetails {
	title: string;
	date: string;
}

export interface ExploitDetails {
	title: string;
	description: string;
	role: string;
	type: 'work' | 'play';
	link: string;
	dateStarted: string;
	dateFinished: string;
	heroImage: string;
	heroImageAlt: string;
}
