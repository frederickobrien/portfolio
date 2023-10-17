export interface MyDetails {
  personalInfo: {
    name: string;
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

export interface BylineDetails {
  title: string;
  publication: string;
  publicationDate: string;
  url: string;
  archiveUrl: string;
  contentType: string;
  soleAuthor: boolean;
}
