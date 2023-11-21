import FilterList from "./components/filterList/FilterList";
import { FC, useState } from "preact/compat";
import JobList from "./components/jobList/JobList";
import Background from "./components/background/Background";

export const App: FC = () => {
  //This state is for storing chosen criterias for filtering job list.
  const [filterArr, setFilterArr] = useState<string[]>([]);
  return (
    <div className="flex flex-col items-center">
      <Background />
      <FilterList filterArr={filterArr} setFilterArr={setFilterArr} />
      <JobList filterArr={filterArr} setFilterArr={setFilterArr} />
    </div>
  );
};
