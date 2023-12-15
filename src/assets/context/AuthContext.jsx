import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [user, setUser] = useState({});
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  function handleInfoUser(resp) {
    const { token, user } = resp;
    setUser(user);
    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);
    console.log(user, token);
  }

  const value = {
    isLogged,
    setIsLogged,
    user,
    setUser,
    handleInfoUser,
    token,
    setToken,
    // handleLogin,
    // handleLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
