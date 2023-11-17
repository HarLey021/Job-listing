import topBackgroundMobile from "./assets/bg-header-mobile.svg";
import topBackgroundDesktop from "./assets/bg-header-desktop.svg";

export function App() {
  return (
    <>
      <div className="w-full h-156 bg-topBackground ">
        <img
          src={topBackgroundMobile}
          className="w-full h-full desktop:hidden"
        ></img>
        <img
          src={topBackgroundDesktop}
          className="w-full h-full hidden desktop:block"
        ></img>
      </div>
    </>
  );
}
