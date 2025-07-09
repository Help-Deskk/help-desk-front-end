import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth-routes";

export function AppRoutes(){
  return <BrowserRouter>
    <AuthRoutes/>
  </BrowserRouter>
}