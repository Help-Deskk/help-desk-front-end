import { createContext, useEffect, useState, type ReactNode } from "react";

type AuthContext = {
  isLoading: boolean;
  session: null | UserAPIResponse;
  save: (data: UserAPIResponse) => void;
};

export const LOCAL_STORAGE_KEY = "@helpdesk";
export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null);
  const [isLoading, setIsLoading] = useState(true);
  function save(data: UserAPIResponse) {
    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}:user`,
      JSON.stringify(data.resouce_owner)
    );
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token);

    setSession(data);
  }
  function loadUser() {
    const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`);
    const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`);
    if (token && user) {
      setSession({ token, resouce_owner: JSON.parse(user) });
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ session, save, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
