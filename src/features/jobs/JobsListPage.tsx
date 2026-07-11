import JobCard from "./JobCard";
import { mockJobs } from "./mockJobs";
const JobsListPage = () => {
  return (
    <h1>
      <JobCard job={mockJobs[0]} />
    </h1>
  );
};

export default JobsListPage;
