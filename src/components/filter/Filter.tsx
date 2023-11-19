import { FC } from "preact/compat";
import { filterArrInterface } from "../../Interfaces";

const Filter: FC<filterArrInterface> = ({ filterArr }) => {
  return (
    <div className="relative py-5 pl-5 pr-6 bg-white w-327 h-120 desktop:w-1110 desktop:h-72 desktop:px-10 rounded-5 -mt-36">
      <div className="h-8 px-2 mb-2 mr-3 rounded bg-mainGreen bg-opacity-10 text-mainGreen hover:text-white hover:bg-mainGreen">
        asdsa
      </div>
      <button className="absolute h-full -mt-5 text-base font-bold right-6 desktop:right-10 hover:text-mainGreen ">
        Clear
      </button>
    </div>
  );
};

export default Filter;
