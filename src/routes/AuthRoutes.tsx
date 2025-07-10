import { Route } from "react-router";
import { SignUp } from "../pages/Auth/SignUp";
import { Routes } from "react-router";
import { SignIn } from "../pages/Auth/SignIn";
import { LoginLayout } from "../components/LoginLayout";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
