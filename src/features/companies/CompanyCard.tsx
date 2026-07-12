import type { Company } from "../../types/models";

const CompanyCard = ({ company }: { company: Company }) => {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <div className="flex items-center gap-3">
        {company.logo ? (
          <img
            src={company.logo}
            alt={company.name}
            className="w-12 h-12 rounded-lg object-cover border border-border"
          />
        ) : (
          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-muted font-semibold">
            {company.name.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="font-bold text-ink text-lg">{company.name}</h3>
          <p className="text-sm text-muted">{company.industry}</p>
        </div>
      </div>

      {company.description && (
        <p className="text-sm text-muted mt-3">{company.description}</p>
      )}

      <div className="flex items-center gap-2 mt-3 text-sm text-muted">
        <span>{company.location}</span>
      </div>
    </div>
  );
};

export default CompanyCard;
