import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export function AppLogin() {
  const { isLogged, setIsLogged, handleInfoUser } = useAuthContext();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const resp = await new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          token: 1234,
          user: {
            name: "mario",
            last_name: "bianchi",
            email: "mariobianchi@gmail.com",
          },
        });
      }, 1000)
    );

    handleInfoUser(resp);
    setIsLogged(true);
    navigate("/");
  }
  return (
    <main className="flex items-center justify-center">
      <div className="text-white">{isLogged}</div>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </main>
  );
}
