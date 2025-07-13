import { useContext, type ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";


export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
}