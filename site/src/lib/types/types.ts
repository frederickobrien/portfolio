export interface WeblogDetails {
	title: string;
	date: string;
}

export interface ProjectDetails {
	title: string;
	description: string;
	role: string;
	type: 'work' | 'play';
	link: string;
	dateStarted: Date;
	dateFinished: Date | null;
	heroImage: string;
	heroImageAlt: string;
}

export interface BylineDetails {
	title: string;
	publication: string;
	publicationDate: string;
	url: string;
	archiveUrl: string;
	contentType: 'news' | 'feature';
	soleAuthor: boolean;
}
