import { FC } from "preact/compat";
import Job from "../job/Job";
import data from "../../../data.json";
import { filterArrInterface } from "../../Interfaces";

const JobList: FC<filterArrInterface> = ({ filterArr, setFilterArr }) => {
  const filteredJobs = data.filter((job) => {
    return filterArr.every((criteria) => {
      return (
        job.role === criteria ||
        job.level === criteria ||
        (job.languages && job.languages.includes(criteria)) ||
        (job.tools && job.tools.includes(criteria))
      );
    });
  });

  return (
    <>
      {data &&
        filteredJobs.map((job) => (
          <Job
            id={job.id}
            company={job.company}
            logo={job.logo}
            new={job.new}
            featured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            tools={job.tools}
            filterArr={filterArr}
            setFilterArr={setFilterArr}
          />
        ))}
    </>
  );
};

export default JobList;
