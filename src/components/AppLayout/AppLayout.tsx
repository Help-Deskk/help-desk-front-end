import { Outlet } from "react-router";
import LogoIconLight from "../../assets/Logo_IconLight.svg";
import { AsideNavigation } from "./AsideNavigation";

export function AppLayout() {
  const context = {
    user: {
      name: "Isaac",
      email: "isaac@email.com",
    },
  };
  return (
    <div className="h-screen w-screen bg-gray-100 flex">
      <div className="h-full w-1/5 flex flex-col ">
        <aside className="bg-gray-100 flex-1">
          <div className="flex items-center gap-4 border-b border-b-gray-300 p-10">
            <img src={LogoIconLight} alt="Logo Help-Desk" />
            <div>
              <h1 className="text-gray-600 text-2xl">Help Desk</h1>
              <span className="text-brand-light font-semibold text-md">
                ADMIN
              </span>
            </div>
          </div>
          <AsideNavigation />
        </aside>
        <footer className="p-10 border-t border-t-gray-300 flex gap-4 items-center ">
          <div className="h-15 w-15 rounded-full bg-brand-dark">
            <span className="flex items-center justify-center h-full">AU</span>
          </div>
          <div>
            <span className="text-gray-600 text-2xl">{context.user.name}</span>
            <p className="text-gray-400 text-xl">{context.user.email}</p>
          </div>
        </footer>
      </div>

      <div className="p-10 w-full bg-gray-600 mt-3 rounded-tl-xl">
        <Outlet />
      </div>
    </div>
  );
}
