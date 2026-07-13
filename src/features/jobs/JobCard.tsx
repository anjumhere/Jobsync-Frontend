import { MapPin, Clock } from "lucide-react";
import type { Job } from "../../types/models";

const jobTypeLabel: Record<string, string> = {
  "full-time": "Full-Time",
  "part-time": "Part-Time",
  contract: "Contract",
  internship: "Internship",
  remote: "Remote",
};

const formatSalary = (min?: number, max?: number) => {
  if (!min && !max) return null;
  const fmt = (n: number) => (n >= 1000 ? `${Math.round(n / 1000)}k` : n);
  if (min && max) return `$${fmt(min)} - $${fmt(max)}`;
  return `$${fmt(min ?? max!)}`;
};

const timeAgo = (dateStr: string) => {
  const days = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24)
  );
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
};

const JobCard = ({ job }: { job: Job }) => {
  const company = typeof job.company === "string" ? null : job.company;
  const companyName = company?.name ?? "Unknown Company";
  const salary = formatSalary(job.salaryMin, job.salaryMax);
  interface Colors {
    remote: string;
    onsite: string;
  }

  const colors: Colors = {
    remote: "text-red-500",
    onsite: "text-purple-500",
  };
  return (
    <div className="bg-white border border-border rounded-xl p-5 w-full max-w-2xl hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          {company?.logo ? (
            <img
              src={company.logo}
              alt={companyName}
              className="w-12 h-12 rounded-lg object-cover border border-border"
            />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-muted font-semibold">
              {companyName.charAt(0)}
            </div>
          )}
          <div>
            <h3 className="font-bold text-ink text-lg leading-tight">
              {job.title}
            </h3>
            <p className="text-sm text-muted font-medium">{companyName}</p>
          </div>
        </div>

        <div className="flex gap-2 shrink-0">
          <button className="px-4 py-1.5 rounded-full hover:shadow-md cursor-pointer transition-all duration-300 border border-border text-sm font-medium text-ink hover:border-ink">
            Save
          </button>
          <button className="px-4 py-1.5 cursor-pointer hover:shadow-md rounded-full  transition-all ease-in-out duration-300 hover:rotate-2 bg-ink text-white text-sm font-semibold hover:bg-gray-800">
            Apply Now
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-4 text-sm text-muted">
        <span className="flex items-center gap-1">
          <MapPin
            size={14}

            className={
              job.location === "Remote" ? colors.remote : colors.onsite
            }
          />
          {job.location}
        </span>
        <span className="w-1 h-1 rounded-full bg-border" />
        <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-ink text-xs font-medium">
          {jobTypeLabel[job.jobType]}
        </span>
        {salary && (
          <>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-semibold text-ink">{salary}</span>
          </>
        )}
      </div>

      <div className="flex items-center gap-1 mt-3 text-xs text-muted">
        <Clock size={12} />
        Posted {timeAgo(job.createdAt)}
      </div>
    </div>
  );
};

export default JobCard;
