import { Route, Routes } from "react-router";
import { CallingsTechnician } from "../pages/Technician/Callings";
import { AppLayout } from "../components/AppLayout/AppLayout";

export function TechnicianRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<CallingsTechnician />} />
      </Route>
    </Routes>
  );
}
