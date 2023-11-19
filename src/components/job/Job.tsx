import { FC } from "preact/compat";
import ovalSeparatorLogo from "../../../public/images/Oval Copy.svg";
import JobInterface from "../../Interfaces";

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
}) => {
  return (
    <div className="px-6 pt-8 pb-6 m-auto bg-white w-327 h-257 desktop:px-10 desktop:py-8 border-l-5 desktop:flex border-mainGreen desktop:w-1110 desktop:h-152 rounded-5 mt-14">
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
      <button className="w-20 h-8 rounded bg-mainGreen bg-opacity-10 text-mainGreen hover:text-white hover:bg-mainGreen">
        {role}
        {level}
        {languages}
        {tools}
      </button>
    </div>
  );
};

export default Job;
