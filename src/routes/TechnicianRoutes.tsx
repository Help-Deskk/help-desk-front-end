import { Route, Routes } from "react-router";
import { CallingsTechnician } from "../pages/Technician/Callings";

export function TechnicianRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CallingsTechnician />} />
    </Routes>
  );
}
