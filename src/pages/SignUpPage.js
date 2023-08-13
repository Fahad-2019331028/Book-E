import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";
const SignUpPage = () => {
  const navigate = useNavigate();

  const onAboutClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onSignUpButtonClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <nav className={styles.navbar} id="navbar" navbar>
        <div className={styles.icon}>
          <img
            className={styles.phbookThinIcon}
            alt=""
            src="/phbookthin1.svg"
          />
          <div className={styles.bookE}>BOOK-E</div>
        </div>
        <div className={styles.button}>
          <button className={styles.about} onClick={onAboutClick}>
            About
          </button>
          <button className={styles.about}>Sign Up</button>
          <button className={styles.about} onClick={onLoginClick}>
            Login
          </button>
        </div>
      </nav>
      <img className={styles.bgBlurSignUpPageIcon} alt="" src="/bg_blur5.svg" />
      <form className={styles.signUpSection} method="post">
        <img
          className={styles.signUpSectionChild}
          alt=""
          src="/rectangle-113@2x.png"
        />
        <input
          className={styles.confirmPassword}
          type="text"
          placeholder={`Confirm Password
`}
        />
        <input
          className={styles.password}
          type="password"
          placeholder="Password"
          required
          id="passord"
        />
        <input
          className={styles.email}
          type="email"
          placeholder="Email"
          required
          id="email"
        />
        <input
          className={styles.userName}
          type="text"
          placeholder="User Name"
          required
          id="user_name"
        />
        <input
          className={styles.phone}
          type="text"
          placeholder="Phone Number"
          required
          id="phone_number"
        />
        <input
          className={styles.address}
          type="text"
          placeholder="Address"
          required
          id="address"
        />
        <input
          className={styles.name}
          type="text"
          placeholder="Name "
          required
          id="name"
        />
        <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
          <div className={styles.signUp1}>Sign Up</div>
        </button>
        <div className={styles.getStarted}>Get Started</div>
      </form>
    </div>
  );
};

export default SignUpPage;
