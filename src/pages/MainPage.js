import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
const MainPage = () => {
  const navigate = useNavigate();

  const onSignupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onSignup1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogin1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='loginText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="main-page">
      <nav className="navbar2" id="nav">
        <div className="book-e-icon2">
          <img className="vector-icon2" alt="" src="/vector.svg" />
          <div className="book-e2">Book-E</div>
        </div>
        <div className="sl2">
          <button className="signup3" onClick={onSignupClick}>
            <div className="sign-up4">Sign Up</div>
          </button>
          <button className="login7" onClick={onLoginClick}>
            <div className="login8">Login</div>
          </button>
        </div>
      </nav>
      <button className="signup4" onClick={onSignup1Click}>
        <div className="sign-up5">Sign Up</div>
      </button>
      <button className="login9" onClick={onLogin1Click}>
        <div className="login10" data-scroll-to="loginText">
          Login
        </div>
      </button>
    </div>
  );
};

export default MainPage;
