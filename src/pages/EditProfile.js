import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EditProfile.module.css";
const EditProfile = () => {
  const navigate = useNavigate();

  const onHomePageClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogOutClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.editProfile}>
      <nav className={styles.navbar} id="navbar" navbar>
        <div className={styles.icon}>
          <img className={styles.phbookThinIcon} alt="" src="/phbookthin.svg" />
          <div className={styles.bookE}>BOOK-E</div>
        </div>
        <div className={styles.button}>
          <button className={styles.homePage} onClick={onHomePageClick}>
            Home Page
          </button>
          <div className={styles.forum}>Forum</div>
          <button className={styles.profile} onClick={onProfileClick}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <button className={styles.homePage}>Profile</button>
          </button>
          <div className={styles.logout}>
            <button className={styles.logOut} onClick={onLogOutClick}>
              Log Out
            </button>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
      </nav>
      <img className={styles.bgBlurSignUpPageIcon} alt="" src="/bg_blur7.svg" />
      <img
        className={styles.editProfileChild}
        alt=""
        src="/rectangle-71@2x.png"
      />
      <h1 className={styles.name}>Edit Your Profile</h1>
      <form className={styles.frameParent} method="post" id="edit">
        <div className={styles.frame}>
          <div className={styles.nameParent}>
            <div className={styles.password}>Name</div>
            <input
              className={styles.email}
              type="text"
              placeholder="Name"
              id="name"
            />
          </div>
          <div className={styles.frame1}>
            <div className={styles.nameParent}>
              <div className={styles.password}>Password</div>
              <input
                className={styles.email}
                type="password"
                placeholder="password"
                required
                id="password"
              />
            </div>
          </div>
          <div className={styles.frame2}>
            <div className={styles.nameParent}>
              <div className={styles.password}>Email</div>
              <input
                className={styles.email}
                type="email"
                placeholder="Email"
                required
                id="email"
              />
            </div>
            <div className={styles.nameParent}>
              <div className={styles.password}>Address</div>
              <input
                className={styles.email}
                type="text"
                placeholder="Address"
                id="address"
              />
            </div>
          </div>
          <div className={styles.nameParent}>
            <div className={styles.password}>Phone Number</div>
            <input
              className={styles.email}
              type="text"
              placeholder="Number"
              id="phone_number"
            />
          </div>
          <div className={styles.nameParent}>
            <div className={styles.password}>User Name</div>
            <input
              className={styles.email}
              type="text"
              placeholder="User Name"
              id="user_name"
            />
          </div>
        </div>
        <div className={styles.frame3}>
          <input className={styles.frameChild} type="file" required />
          <div className={styles.frame4}>
            <button className={styles.doneEditingWrapper}>
              <div className={styles.doneEditing}>Done Editing</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
