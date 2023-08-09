import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";
const SignUpPage = () => {
  const navigate = useNavigate();

  const onSignUpPageContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSignupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="signup-page" onClick={onSignUpPageContainerClick}>
      <nav className="navbar" id="nav">
        <div className="book-e-icon">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="book-e">Book-E</div>
        </div>
        <div className="sl">
          <button className="signup" onClick={onSignupClick}>
            <div className="sign-up">Sign Up</div>
          </button>
          <button className="login" onClick={onLoginClick}>
            <div className="login1">Login</div>
          </button>
        </div>
      </nav>
      <form method="post" id="signUp">
        <div className="sign-up1">SIgn UP</div>
        <div className="sign-up-form">
          <form className="name" method="post" id="name">
            <div className="name1">Name</div>
            <textarea className="name-text" />
          </form>
          <form className="phone" method="post">
            <div className="name1">Phone</div>
            <input className="name-text" type="text" />
          </form>
          <div className="address">
            <div className="address1">Address</div>
            <input className="address-text" type="text" />
          </div>
          <div className="gender">
            <div className="gender1">gender</div>
            <input className="gender2" type="text" />
          </div>
          <div className="email">
            <div className="email1">Email</div>
            <input className="email-text" type="text" />
          </div>
          <div className="address">
            <div className="date-of-birth">Date of birth</div>
            <input className="address-text" type="text" />
          </div>
          <div className="address">
            <div className="profession1">profession</div>
            <input className="profession-text" type="text" />
          </div>
          <div className="address">
            <div className="password1">password</div>
            <input className="address-text" type="text" />
          </div>
          <div className="address">
            <div className="confirm-password">confirm password</div>
            <input className="address-text" type="text" />
          </div>
        </div>
        <button className="signup1">
          <div className="sign-up2">Sign Up</div>
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
