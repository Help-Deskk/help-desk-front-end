import { Route } from "react-router";
import { SignUp } from "../pages/SignUp";
import { Routes } from "react-router";
import { SignIn } from "../pages/SignIn";
import { LoginLayout } from "../components/login-layout";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginLayout/>}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
