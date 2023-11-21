import { FC } from "preact/compat";
import X from "../../../public/images/icon-remove.svg";
import { CriteriaInterface } from "../../Interfaces";

const Criteria: FC<CriteriaInterface> = ({
  criteriaKey,
  criteria,
  filterArr,
  setFilterArr,
}) => {
  const handleXButton = () => {
    const updatedFilterArr = filterArr.filter(
      (criteriaName) => criteriaName !== criteriaKey
    );
    setFilterArr(updatedFilterArr);
  };
  return (
    <div className="flex mb-2 mr-3">
      <div className="flex items-center h-8 px-2 rounded-l w-min bg-mainGreen bg-opacity-10 text-mainGreen ">
        {criteria}
      </div>
      <button
        onClick={handleXButton}
        className="flex items-center justify-center w-8 h-8 rounded-r hover:bg-mainDark bg-mainGreen"
      >
        <img src={X} />
      </button>
    </div>
  );
};

export default Criteria;
