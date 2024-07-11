import { useParams } from 'react-router';
import { getCompany } from '../lib/graphql/queries';
import { useEffect, useState } from 'react';
import JobList from '../components/JobList';

function CompanyPage() {
  const { companyId } = useParams();
  const [company, setCompany] = useState();
  useEffect (() => {
    getCompany(companyId).then(setCompany);
  }, [companyId]);

  console.log('[CompanyPage] Company:', company);
  if (!company) {
    return <div>Loading......</div>;
  }

  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
      <h2 className="title is 5">
        jobs at {company.name}

      </h2>
      <JobList jobs={company.jobs}/>
    </div>
  );
}

export default CompanyPage;
