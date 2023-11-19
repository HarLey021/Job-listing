import { FC } from "preact/compat";

const Filter: FC = () => {
  return (
    <div className="w-327 h-120 py-5 pl-5 desktop:w-1110 desktop:h-72 desktop:px-10 pr-6 relative bg-white rounded-5 -mt-36">
      <button className="text-base font-bold right-6 h-full absolute -mt-5 desktop:right-10 hover:text-mainGreen ">
        Clear
      </button>
    </div>
  );
};

export default Filter;
