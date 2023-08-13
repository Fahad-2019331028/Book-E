import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./UploaderProfile.module.css";
const UploaderProfile = () => {
  const navigate = useNavigate();

  const onProfileClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogOutClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onFrameLinkClick = useCallback(() => {
    navigate("/book-details");
  }, [navigate]);

  const onFrameLink1Click = useCallback(() => {
    navigate("/book-details");
  }, [navigate]);

  const onFrameLink2Click = useCallback(() => {
    navigate("/book-details");
  }, [navigate]);

  const onFrameLink3Click = useCallback(() => {
    navigate("/book-details");
  }, [navigate]);

  return (
    <div className={styles.uploaderProfile}>
      <nav className={styles.navbar} id="navbar" navbar>
        <div className={styles.icon}>
          <img className={styles.phbookThinIcon} alt="" src="/phbookthin.svg" />
          <div className={styles.bookE}>BOOK-E</div>
        </div>
        <div className={styles.button}>
          <button className={styles.homePage}>Home Page</button>
          <div className={styles.forum}>Forum</div>
          <button className={styles.profile} onClick={onProfileClick}>
            <img className={styles.frameIcon} alt="" src="/frame4.svg" />
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
      <img className={styles.bgBlurSignUpPageIcon} alt="" src="/bg_blur1.svg" />
      <div className={styles.ratingParent}>
        <div className={styles.rating}>Rating</div>
        <div className={styles.rating}>#Rating</div>
      </div>
      <div className={styles.emailParent}>
        <div className={styles.email}>Email:</div>
        <div className={styles.email1}>#email</div>
      </div>
      <section className={styles.addressParent} id="address">
        <div className={styles.address}>Address :</div>
        <div className={styles.adress}>#adress</div>
      </section>
      <section className={styles.phoneNumberParent} id="phone_no">
        <div className={styles.phoneNumber}>Phone Number:</div>
        <div className={styles.phoneNo}>#phone_no</div>
      </section>
      <img
        className={styles.uploaderProfileChild}
        alt=""
        src="/rectangle-7@2x.png"
      />
      <h1 className={styles.name}>Name</h1>
      <div className={styles.reviewsParent} id="reviews">
        <h1 className={styles.reviews}>Reviews:</h1>
        <div className={styles.frame} id="review_section">
          <div className={styles.userParent} id="review_no">
            <a className={styles.user}>#user</a>
            <p className={styles.njcnjzncnzxjcnjkdscjsjnzkcnkds}>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                njcnjzncnzxjcnjkdscjsjnzkcnkdsnkvncxjvjkn
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                zjkxjbjxbvjxcbjvbdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                cjxkbvjcxjkvdjkvkskvis
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                jkcbvjxbjvbjxbvjkdsjkv
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                kfdnvksdnkvnsdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>jvnjdn</span>
            </p>
          </div>
          <div className={styles.userParent} id="review_no">
            <a className={styles.user}>#user</a>
            <p className={styles.njcnjzncnzxjcnjkdscjsjnzkcnkds}>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                njcnjzncnzxjcnjkdscjsjnzkcnkdsnkvncxjvjkn
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                zjkxjbjxbvjxcbjvbdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                cjxkbvjcxjkvdjkvkskvis
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                jkcbvjxbjvbjxbvjkdsjkv
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                kfdnvksdnkvnsdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>jvnjdn</span>
            </p>
          </div>
          <div className={styles.userParent} id="review_no">
            <a className={styles.user}>#user</a>
            <p className={styles.njcnjzncnzxjcnjkdscjsjnzkcnkds}>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                njcnjzncnzxjcnjkdscjsjnzkcnkdsnkvncxjvjkn
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                zjkxjbjxbvjxcbjvbdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                cjxkbvjcxjkvdjkvkskvis
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                jkcbvjxbjvbjxbvjkdsjkv
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                kfdnvksdnkvnsdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>jvnjdn</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.uploadedBooks} id="uploaded_books">
        <h1 className={styles.uploadedBooks1}>Uploaded Books</h1>
        <div className={styles.frame1}>
          <form className={styles.book1} method="post">
            <img
              className={styles.book1Child}
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className={styles.bookType}>Book Type:</div>
            <h2 className={styles.bookType1} id="book_type">
              Book Type
            </h2>
            <h2
              className={styles.condition}
              id="book_condition"
            >{`Condition `}</h2>
            <div className={styles.condtion}>Condtion :</div>
            <h3 className={styles.genre} id="genre">
              Genre:
            </h3>
            <h2 className={styles.authorName} id="author_name">
              Author Name
            </h2>
            <h1 className={styles.title} id="tittle">
              Title
            </h1>
            <img
              className={styles.book1Item}
              alt=""
              src="/rectangle-5@2x.png"
            />
            <Link
              className={styles.frameParent}
              to="/book-details"
              onClick={onFrameLinkClick}
            >
              <div className={styles.frame2}>
                <div className={styles.frameChild} />
                <div className={styles.frameWrapper}>
                  <img className={styles.frameIcon1} alt="" src="/frame5.svg" />
                </div>
              </div>
              <div className={styles.viewBook}>View Book.......</div>
            </Link>
          </form>
          <form className={styles.book11} method="post">
            <img
              className={styles.book1Child}
              alt=""
              src="/rectangle-14@2x.png"
            />
            <div className={styles.bookType}>Book Type:</div>
            <h2 className={styles.bookType1} id="book_type">
              Book Type
            </h2>
            <h2
              className={styles.condition}
              id="book_condition"
            >{`Condition `}</h2>
            <div className={styles.condtion}>Condtion :</div>
            <h3 className={styles.genre} id="genre">
              Genre:
            </h3>
            <h2 className={styles.authorName} id="author_name">
              Author Name
            </h2>
            <h1 className={styles.title} id="tittle">
              Title
            </h1>
            <img
              className={styles.book1Item}
              alt=""
              src="/rectangle-5@2x.png"
            />
            <Link
              className={styles.frameParent}
              to="/book-details"
              onClick={onFrameLink1Click}
            >
              <div className={styles.frame2}>
                <div className={styles.frameChild} />
                <div className={styles.frameWrapper}>
                  <img className={styles.frameIcon1} alt="" src="/frame6.svg" />
                </div>
              </div>
              <div className={styles.viewBook}>View Book.......</div>
            </Link>
          </form>
          <form className={styles.book12} method="post">
            <img
              className={styles.book1Child}
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className={styles.bookType}>Book Type:</div>
            <h2 className={styles.bookType1} id="book_type">
              Book Type
            </h2>
            <h2
              className={styles.condition}
              id="book_condition"
            >{`Condition `}</h2>
            <div className={styles.condtion}>Condtion :</div>
            <h3 className={styles.genre} id="genre">
              Genre:
            </h3>
            <h2 className={styles.authorName} id="author_name">
              Author Name
            </h2>
            <h1 className={styles.title} id="tittle">
              Title
            </h1>
            <img
              className={styles.book1Item}
              alt=""
              src="/rectangle-51@2x.png"
            />
            <Link
              className={styles.frameParent}
              to="/book-details"
              onClick={onFrameLink2Click}
            >
              <div className={styles.frame2}>
                <div className={styles.frameChild} />
                <div className={styles.frameWrapper}>
                  <img className={styles.frameIcon1} alt="" src="/frame7.svg" />
                </div>
              </div>
              <div className={styles.viewBook}>View Book.......</div>
            </Link>
          </form>
          <form className={styles.book13} method="post">
            <img
              className={styles.book1Child}
              alt=""
              src="/rectangle-16@2x.png"
            />
            <div className={styles.bookType}>Book Type:</div>
            <h2 className={styles.bookType1} id="book_type">
              Book Type
            </h2>
            <h2
              className={styles.condition}
              id="book_condition"
            >{`Condition `}</h2>
            <div className={styles.condtion}>Condtion :</div>
            <h3 className={styles.genre} id="genre">
              Genre:
            </h3>
            <h2 className={styles.authorName} id="author_name">
              Author Name
            </h2>
            <h1 className={styles.title} id="tittle">
              Title
            </h1>
            <img
              className={styles.book1Item}
              alt=""
              src="/rectangle-52@2x.png"
            />
            <Link
              className={styles.frameParent}
              to="/book-details"
              onClick={onFrameLink3Click}
            >
              <div className={styles.frame2}>
                <div className={styles.frameChild} />
                <div className={styles.frameWrapper}>
                  <img className={styles.frameIcon1} alt="" src="/frame8.svg" />
                </div>
              </div>
              <div className={styles.viewBook}>View Book.......</div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploaderProfile;
