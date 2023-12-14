import { useAuthContext } from "../../context/AuthContext";

export function AppLogin() {
  const { isLogged, setIsLogged } = useAuthContext();
  return (
    <main className="flex items-center justify-center">
      <div className="text-white">{isLogged}</div>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
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
