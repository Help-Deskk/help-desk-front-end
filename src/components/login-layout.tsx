import { Outlet } from "react-router";
import LogoIconLight from "../assets/Logo_IconLight.svg";
export function LoginLayout() {
  return (
    <div className="h-screen w-screen flex img bg-cover bg-no-repeat bg-center">
      <div className="hidden md:block md:w-1/2 md:h-full"></div>
      <div className="flex md:w-1/2 h-auto mt-3 overflow-y-hidden overflow-x-hidden bg-gray-600 rounded-tl-xl rounded-tr-xl md:rounded-tr-none p-12 justify-center flex-col items-center ">
        <div className="flex justify-center items-center gap-4 mb-10">
          <img src={LogoIconLight} className="h-10 w-10" alt="Logo help desk" />
          <h1 className="font-bold text-brand-dark text-3xl">HelpDesk</h1>
        </div>
        <div className="md:min-w-[500px] flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
