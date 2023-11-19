import Filter from "../src/components/filter/Filter";
import { FC, useState } from "preact/compat";
import JobList from "./components/jobList/JobList";
import Background from "./components/background/Background";

export const App: FC = () => {
  const [filterArr, setFilterArr] = useState<string[]>([]);
  return (
    <div className="flex flex-col items-center">
      <Background />
      <Filter filterArr={filterArr} setFilterArr={setFilterArr} />
      <JobList filterArr={filterArr} setFilterArr={setFilterArr} />
    </div>
  );
};
