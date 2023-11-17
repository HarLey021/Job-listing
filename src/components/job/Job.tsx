import { FC } from "preact/compat";
import photoSnapLogo from "../../assets/photosnap.svg";
import ovalSeparatorLogo from "../../assets/Oval Copy.svg";

const Job: FC = () => {
  return (
    <div className="px-6 pt-8 pb-6 m-auto bg-white w-327 h-257 desktop:px-10 desktop:py-8 border-l-5 desktop:flex border-mainGreen desktop:w-1110 desktop:h-152 rounded-5 mt-14">
      <img
        src={photoSnapLogo}
        className="w-12 h-12 -mt-14 desktop:h-88 desktop:w-88 desktop:mt-0 desktop:mr-6"
      />
      <div>
        <div className="flex items-center h-6 mt-2 mb-9 desktop:mb-2.5 desktop:mt-0">
          <h4 className="inline-block mr-8 font-bold text-mainGreen text-13 desktop:text-lg desktop:mr-15">
            Photosnap
          </h4>
          <div className="flex items-center justify-center h-6 mr-2 w-51 bg-mainGreen rounded-xl">
            <p>NEW!</p>
          </div>
          <div className="flex items-center justify-center w-20 h-6 bg-mainDark rounded-xl">
            <p>FEATURED</p>
          </div>
        </div>
        <h3 className="mb-2 font-bold leading-6 text-15 text-mainDark desktop:text-22 desktop:mb-7">
          Senior Frontend Developer
        </h3>
        <div className="flex mb-15 desktop:mb-0">
          <h2>1d ago</h2>
          <img src={ovalSeparatorLogo} className="mr-2.5 desktop:mr-4" />
          <h2>Full Time</h2>
          <img src={ovalSeparatorLogo} className="mr-2.5 desktop:mr-4" />
          <h2>USA only</h2>
        </div>
        <div className="w-full h-px mb-4 bg-lineGrey desktop:hidden"></div>
      </div>
      <button className="w-20 h-8 rounded bg-mainGreen bg-opacity-10 text-mainGreen">
        Frontend
      </button>
    </div>
  );
};

export default Job;
