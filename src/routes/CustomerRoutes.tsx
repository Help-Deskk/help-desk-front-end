import { Route, Routes } from "react-router";
import { CallingsCustomer } from "../pages/Customer/Callings";
import { NewCall } from "../pages/Customer/NewCall";
import { AppLayout } from "../components/AppLayout/AppLayout";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<CallingsCustomer />} />
        <Route path="/new-call" element={<NewCall />} />
      </Route>
    </Routes>
  );
}
