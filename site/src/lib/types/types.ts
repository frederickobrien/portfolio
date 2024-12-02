export interface MyDetails {
	personalInfo: {
		name: string;
		dateOfBirth: string;
		emailAddress: string;
	};
	socialMediaHandles: {
		[key: string]: string;
	};
	qualifications: {
		institution: string;
		qualification: string;
		grade: string;
		startDate: string;
		endDate: string;
	}[];
}

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

export type ProjectObject = {
	meta: ProjectDetails;
	path: string;
};

// type ContentType = 'news' | 'feature' | 'weblog' | 'satire';

export interface BylineDetails {
	title: string;
	publication: string;
	publicationDate: string;
	url: string;
	archiveUrl: string;
	contentType: string;
	soleAuthor: boolean;
}
