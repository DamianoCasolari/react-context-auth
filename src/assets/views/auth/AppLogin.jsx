export function AppLogin() {
  return (
    <main className="flex items-center justify-center">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
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
