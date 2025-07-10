import { Route, Routes } from "react-router";
import { Calls } from "../pages/Admin/Calls";
import { AppLayout } from "../components/AppLayout/AppLayout";
import { Technician } from "../pages/Admin/Technician";
import { Customers } from "../pages/Admin/Customers";
import { Services } from "../pages/Admin/Services";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/calls" element={<Calls />} />
        <Route path="/technician" element={<Technician />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}
