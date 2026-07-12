import type { Company } from "../../types/models";

export const mockCompanies: Company[] = [
  {
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
  },
  {
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
  },
];
