import { Outlet } from "react-router";
import LogoIconLight from '../assets/Logo_IconLight.svg'
export function LoginLayout() {
  return (
    <div className="h-screen w-screen flex img bg-cover bg-no-repeat bg-center">
      <div className="w-1/2 h-full"></div>
      <div className="flex w-1/2 h-auto mt-3 overflow-y-hidden bg-gray-600 rounded-tl-xl p-12 justify-center flex-col items-center">
        <div className="flex justify-center items-center gap-4 mb-10">
          <img src={LogoIconLight} className="h-10 w-10" alt="Logo help desk" />
          <h1 className="font-bold text-brand-dark text-3xl">HelpDesk</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
