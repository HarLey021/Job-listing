import { FC } from "preact/compat";
import { FilterCriteriasInterface } from "../Interfaces";

const FilterCriterias: FC<FilterCriteriasInterface> = ({
  language,
  tool,
  role,
  level,
  filterArr,
  setFilterArr,
}) => {
  /*handleCriteriaClick function adds every chosen criteria to the filter array
   for mapping and rendering filter criterias in filter area*/
  const handleCriteriaClick = (criteria?: string) => {
    if (criteria && !filterArr.includes(criteria)) {
      setFilterArr((prevFilterArr: any) => [...prevFilterArr, criteria]);
    }
  };
  return (
    <button
      onClick={() => handleCriteriaClick(language || tool || role || level)}
      className="h-8 px-2 mb-2 mr-3 rounded bg-mainGreen bg-opacity-10 text-mainGreen hover:text-white hover:bg-mainGreen"
    >
      {language || tool || role || level}
    </button>
  );
};

export default FilterCriterias;
