import topBackgroundMobile from "./assets/bg-header-mobile.svg";
import topBackgroundDesktop from "./assets/bg-header-desktop.svg";
import Job from "./components/job/Job";

export function App() {
  return (
    <body className="flex flex-col ">
      <div className="w-full h-156 bg-mainGreen ">
        <img
          src={topBackgroundMobile}
          className="w-full h-full desktop:hidden"
        ></img>
        <img
          src={topBackgroundDesktop}
          className="hidden w-full h-full desktop:block"
        ></img>
      </div>
      <Job />
    </body>
  );
}
