import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { TechnicianRoutes } from "./TechnicianRoutes";
import { CustomerRoutes } from "./CustomerRoutes";
import { useAuth } from "../hooks/useAuth";

export const EXEMPLE_SESSION  ={
  user:{
    role:'admin'
  }
}
export function AppRoutes() {
  // const { session } = useAuth();
  function Route() {
    switch (EXEMPLE_SESSION.user.role) {
      case "admin":
        return <AdminRoutes />;
      case "technician":
        return <TechnicianRoutes />;
      case "customer":
        return <CustomerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
