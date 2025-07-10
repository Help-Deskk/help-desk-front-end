import { Route, Routes } from "react-router";
import { CallingsCustomer } from "../pages/Customer/Callings";

export function CustomerRoutes(){
  return <Routes>
    <Route path="/" element={<CallingsCustomer/>}/>
  </Routes>
}