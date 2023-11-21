import { FC, useEffect, useState } from "preact/compat";
import { filterArrInterface } from "../../Interfaces";
import Criteria from "../criteria/Criteria";

const FilterList: FC<filterArrInterface> = ({ filterArr, setFilterArr }) => {
  // State to manage a filtered copy of the filterArr
  const [filteredCriterias, setFilteredCriterias] =
    useState<string[]>(filterArr);
  // Update the filteredCriterias state whenever filterArr changes
  useEffect(() => {
    setFilteredCriterias(filterArr);
  }, [filterArr]);

  //This function is for deleting all criterias from filter array and filter area on the screen.
  const handleClearBtn = () => {
    setFilterArr([]);
    setFilteredCriterias([]);
  };

  return (
    <>
      {filteredCriterias.length !== 0 && (
        <div className="relative flex flex-wrap min-h-0 py-5 pl-5 pr-6 bg-white w-327 desktop:w-1110 desktop:min-h-72 desktop:px-10 rounded-5 -mt-36">
          {/*Actually mapping and rendering chosen criterias*/}
          {filteredCriterias.map((criteria) => (
            <Criteria
              criteriaKey={criteria}
              criteria={criteria}
              filterArr={filterArr}
              setFilterArr={setFilterArr}
            />
          ))}
          <button
            onClick={handleClearBtn}
            className="absolute h-full -mt-5 text-base font-bold right-6 desktop:right-10 hover:text-mainGreen "
          >
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export default FilterList;
