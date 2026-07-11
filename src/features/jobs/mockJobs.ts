import type { Job, Company } from "../../types/models";

const acme: Company = {
  _id: "cmp_001",
  owner: "usr_001",
  name: "Acme Systems",
  description: "Infrastructure tooling for distributed teams.",
  logo: "",
  website: "https://acme.dev",
  industry: "Developer Tools",
  location: "Remote",
  createdAt: "2026-05-01T00:00:00.000Z",
  updatedAt: "2026-05-01T00:00:00.000Z",
};

const northlane: Company = {
  _id: "cmp_002",
  owner: "usr_002",
  name: "Northlane Labs",
  description: "Backend infrastructure for fintech products.",
  logo: "",
  website: "https://northlane.io",
  industry: "Fintech",
  location: "Karachi, Pakistan",
  createdAt: "2026-04-15T00:00:00.000Z",
  updatedAt: "2026-04-15T00:00:00.000Z",
};

export const mockJobs: Job[] = [
  {
    _id: "job_001",
    company: acme,
    title: "Backend Engineer (Node.js)",
    description: "Build and maintain REST APIs powering our core platform.",
    requirements: ["Node.js", "MongoDB", "REST API design"],
    location: "Remote",
    jobType: "remote",
    salaryMin: 80001,
    salaryMax: 120000,
    isActive: true,
    createdAt: "2026-07-08T00:00:00.000Z",
    updatedAt: "2026-07-08T00:00:00.000Z",
  },
  {
    _id: "job_002",
    company: northlane,
    title: "Frontend Developer (React)",
    description: "Own our customer dashboard, built in React + TypeScript.",
    requirements: ["React", "TypeScript", "Tailwind CSS"],
    location: "Karachi, Pakistan",
    jobType: "full-time",
    salaryMin: 60000,
    salaryMax: 90000,
    isActive: true,
    createdAt: "2026-07-10T00:00:00.000Z",
    updatedAt: "2026-07-10T00:00:00.000Z",
  },
  {
    _id: "job_003",
    company: acme,
    title: "DevOps Intern",
    description: "Assist with CI/CD pipelines and infrastructure monitoring.",
    requirements: [],
    location: "Remote",
    jobType: "internship",
    // no salaryMin/salaryMax — tests the optional-field case
    isActive: true,
    createdAt: "2026-06-20T00:00:00.000Z",
    updatedAt: "2026-06-20T00:00:00.000Z",
  },
  {
    _id: "job_004",
    company: northlane,
    title: "Contract QA Engineer",
    description: "Short-term engagement testing our payments API.",
    requirements: ["Postman", "Jest", "API testing"],
    location: "Remote",
    jobType: "contract",
    salaryMin: 30,
    salaryMax: 45, // hourly, since it's contract
    isActive: false, // tests the "closed" state
    createdAt: "2026-05-30T00:00:00.000Z",
    updatedAt: "2026-06-25T00:00:00.000Z",
  },
];
