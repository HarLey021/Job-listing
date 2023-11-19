import { FC } from "preact/compat";
import Job from "../job/Job";
import data from "../../../data.json";

const JobList: FC = () => (
  <>
    {data &&
      data.map((job) => (
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
        />
      ))}
  </>
);

export default JobList;
