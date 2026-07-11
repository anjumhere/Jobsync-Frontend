// Every mongoose documentt has these three fields automatically

interface BaseDocument {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface User extends BaseDocument {
  fullName: string;
  email: string;
  avatar?: string;
  coverImage?: string;
  headline: string;
  bio: string;
  skills: string[];
  resume?: string;
  savedJobs: string[];
}

export interface Company extends BaseDocument {
  owner: string | User;
  name: string;
  description?: string;
  logo?: string;
  website?: string;
  industry?: string;
  location?: string;
}

export type JobType =
  "full-time" | "part-time" | "contract" | "internship" | "remote";

export interface Job extends BaseDocument {
  company: string | Company;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  jobType: JobType;
  salaryMin?: number;
  salaryMax?: number;
  isActive?: boolean;
}

export type ApplicationStatus =
  "applied" | "reviewed" | "accepted" | "rejected";

export interface Application extends BaseDocument {
  job: string | Job;
  applicant: string | User;
  status: ApplicationStatus;
  resume: string;
  coverNote?: string;
}
