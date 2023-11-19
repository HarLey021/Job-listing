import Filter from "../src/components/filter/Filter";
import { FC } from "preact/compat";
import JobList from "./components/jobList/JobList";
import Background from "./components/background/Background";

export const App: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Background />
      <Filter />
      <JobList />
    </div>
  );
};
