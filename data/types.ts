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
