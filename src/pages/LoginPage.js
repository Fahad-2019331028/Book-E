import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
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
          <button className={styles.about}>About</button>
          <button className={styles.about} onClick={onSignUpClick}>
            Sign Up
          </button>
          <button className={styles.about}>Login</button>
        </div>
      </nav>
      <img className={styles.bgBlurSignUpPageIcon} alt="" src="/bg_blur4.svg" />
      <form className={styles.loginSection} method="post">
        <img
          className={styles.loginSectionChild}
          alt=""
          src="/rectangle-112@2x.png"
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
        <div className={styles.login1}>Login</div>
        <button className={styles.loginButton} onClick={onLoginButtonClick}>
          <div className={styles.login2}>Login</div>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
