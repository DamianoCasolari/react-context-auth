import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const value = {
    isLogged,
    setIsLogged,
    // user,
    // handleLogin,
    // handleLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
