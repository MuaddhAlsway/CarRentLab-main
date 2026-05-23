import './LogoutPage.css';
import { Link } from 'react-router-dom';

const LogoutPage = () => {
  return (
    <div className="logoutPage">
      <div className="logoutContainer">
        <h1>Logged Out</h1>
        <p>You have successfully logged out.</p>
        <Link to="/login" className="loginAgainBtn">Login Again</Link>
      </div>
    </div>
  );
};

export default LogoutPage;
