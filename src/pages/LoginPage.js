import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
const LoginPage = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onSignupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogin1Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="login-page">
      <form className="login-section" method="post" id="signUp">
        <div className="login2">Login</div>
        <div className="login-form">
          <div className="email2">
            <div className="email3">Email</div>
            <input className="email-text1" type="text" />
          </div>
          <div className="password3">
            <div className="password4">password</div>
            <input className="password5" type="text" />
          </div>
        </div>
        <button className="login3" onClick={onLoginClick}>
          <div className="login4">Login</div>
        </button>
      </form>
      <nav className="navbar1" id="nav">
        <div className="book-e-icon1">
          <img className="vector-icon1" alt="" src="/vector.svg" />
          <div className="book-e1">Book-E</div>
        </div>
        <div className="sl1">
          <button className="signup2" onClick={onSignupClick}>
            <div className="sign-up3">Sign Up</div>
          </button>
          <button className="login5" onClick={onLogin1Click}>
            <div className="login6">Login</div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LoginPage;
