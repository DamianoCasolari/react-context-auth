import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

export function PrivatePage({ children }) {
  const { isLogged } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/dashboard");
    }
  }, [isLogged]);

  return <>{children}</>;
}
