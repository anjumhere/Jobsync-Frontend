import JobCard from "./JobCard";
import { mockJobs } from "./mockJobs";

const JobsListPage = () => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4 py-8 px-4">
      {mockJobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobsListPage;
