import CompanyCard from "./CompanyCard";
import { mockCompanies } from "./mockCompanies";

const CompaniesListPage = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {mockCompanies.map((company) => (
        <CompanyCard key={company._id} company={company} />
      ))}
    </div>
  );
};

export default CompaniesListPage;
