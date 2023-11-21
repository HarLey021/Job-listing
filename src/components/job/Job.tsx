import { FC } from "preact/compat";
import ovalSeparatorLogo from "../../../public/images/Oval Copy.svg";
import { JobInterface } from "../../Interfaces";
import FilterCriterias from "../filterCriterias/FilterCriterias";

const Job: FC<JobInterface> = ({
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  filterArr,
  setFilterArr,
}) => {
  return (
    <div className="justify-between px-6 pt-8 pb-6 m-auto bg-white desktop:items-center desktop:flex w-327 min-h-257 desktop:px-10 desktop:py-8 border-l-5 border-mainGreen desktop:w-1110 desktop:h-152 rounded-5 mt-14">
      <div className="desktop:flex desktop:flex-row">
        <img
          src={logo}
          className="w-12 h-12 -mt-14 desktop:h-88 desktop:w-88 desktop:mt-0 desktop:mr-6"
        />
        <div>
          <div className="flex items-center h-6 mt-2 mb-9 desktop:mb-2.5 desktop:mt-0">
            <h4 className="inline-block mr-8 font-bold text-mainGreen text-13 desktop:text-lg desktop:mr-15">
              {company}
            </h4>
            {isNew && (
              <div className="flex items-center justify-center h-6 mr-2 w-51 bg-mainGreen rounded-xl">
                <p>NEW!</p>
              </div>
            )}
            {featured && (
              <div className="flex items-center justify-center w-20 h-6 bg-mainDark rounded-xl">
                <p>FEATURED</p>
              </div>
            )}
          </div>
          <h3 className="mb-2 font-bold leading-6 hover:text-mainGreen hover:cursor-pointer text-mainDark desktop:text-22 text-15 desktop:mb-7">
            {position}
          </h3>
          <div className="flex mb-15 desktop:mb-0">
            <h2>{postedAt}</h2>
            <img src={ovalSeparatorLogo} className="mr-2.5 desktop:mr-4" />
            <h2>{contract}</h2>
            <img src={ovalSeparatorLogo} className="mr-2.5 desktop:mr-4" />
            <h2>{location}</h2>
          </div>
          <div className="w-full h-px mb-4 bg-lineGrey desktop:hidden"></div>
        </div>
      </div>
      <div>
        {/* This part of the code renders FilterCriterias components for each selected criteria in the filter area */}
        {role && (
          <FilterCriterias
            role={role}
            filterArr={filterArr}
            setFilterArr={setFilterArr}
          />
        )}
        {level && (
          <FilterCriterias
            level={level}
            filterArr={filterArr}
            setFilterArr={setFilterArr}
          />
        )}
        {languages &&
          languages.length > 0 &&
          languages.map((language) => (
            <FilterCriterias
              language={language}
              filterArr={filterArr}
              setFilterArr={setFilterArr}
            />
          ))}
        {tools &&
          tools.length > 0 &&
          tools.map((tool) => (
            <FilterCriterias
              tool={tool}
              filterArr={filterArr}
              setFilterArr={setFilterArr}
            />
          ))}
      </div>
    </div>
  );
};

export default Job;
