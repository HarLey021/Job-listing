import topBackgroundMobile from "../../../public/images/bg-header-mobile.svg";
import topBackgroundDesktop from "../../../public/images/bg-header-desktop.svg";

const Background = () => {
  return (
    <div className="w-full h-156 bg-mainGreen ">
      <img
        src={topBackgroundMobile}
        className="w-full h-full desktop:hidden"
        alt="Mobile Background"
      ></img>
      <img
        src={topBackgroundDesktop}
        className="hidden w-full h-full desktop:block"
        alt="Desktop Background"
      ></img>
    </div>
  );
};

export default Background;
