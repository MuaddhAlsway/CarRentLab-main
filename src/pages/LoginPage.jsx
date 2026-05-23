import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1>Login</h1>
        <p>Enter your credentials to access your account.</p>
        <form className="loginForm">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="********" required />

          <button type="submit">Login</button>
        </form>
        <p className="loginFooter">Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
