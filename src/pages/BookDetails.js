import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./BookDetails.module.css";
const BookDetails = () => {
  const navigate = useNavigate();

  const onProfileClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogOutClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onFrameLinkClick = useCallback(() => {
    navigate("/uploader-profile");
  }, [navigate]);

  return (
    <div className={styles.bookDetails}>
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
      <img className={styles.bgBlurSignUpPageIcon} alt="" src="/bg_blur2.svg" />
      <img className={styles.bookDetailsChild} alt="" src="/rectangle-9.svg" />
      <img className={styles.bookDetailsItem} alt="" src="/book_img@2x.png" />
      <div className={styles.uploader} id="uploader">
        <img
          className={styles.uploaderChild}
          alt=""
          src="/rectangle-17@2x.png"
        />
        <img
          className={styles.uploaderItem}
          alt=""
          src="/rectangle-53@2x.png"
        />
        <Link
          className={styles.frameParent}
          to="/book-details"
          onClick={onFrameLinkClick}
        >
          <div className={styles.frame}>
            <div className={styles.frameChild} />
            <div className={styles.frameWrapper}>
              <img className={styles.frameIcon1} alt="" src="/frame9.svg" />
            </div>
          </div>
          <div className={styles.viewProfile}>View Profile......</div>
        </Link>
        <h1 className={styles.name} id="tittle">
          #Name
        </h1>
        <div className={styles.uplodedBy}>Uploded by</div>
      </div>
      <div className={styles.authorWrapper}>
        <div className={styles.author}>Author</div>
      </div>
      <h1 className={styles.title} id="book_title">
        Title
      </h1>
      <div className={styles.frameGroup} id="extra">
        <button className={styles.confirmOrderWrapper}>
          <div className={styles.confirmOrder}>Confirm order</div>
        </button>
        <div className={styles.price}>Price:</div>
        <h2 className={styles.price1} id="price_val">
          Price:
        </h2>
        <div className={styles.frame1}>
          <h2 className={styles.conditionCondition} id="condition_val">
            Condition : #Condition
          </h2>
          <section className={styles.frame2} id="book_type">
            <div className={styles.bookType}>Book Type :</div>
            <h2 className={styles.bookType1} id="book_type_val">
              Book Type :
            </h2>
          </section>
        </div>
      </div>
      <div className={styles.descriptionBlaBlaBlaBlaBParent} id="description">
        <p className={styles.descriptionBlaBlaContainer} id="book_description">
          <span>description</span>
          <span className={styles.blaBlaBla}>
            : bla bla bla bla bla bla bla bla bla description: bla bla bla bla
            bla bla bla bla bladescription: bla bla bla bla bla bla bla bla bla
            description: bla bla bla bla bla bla bla bla bla description: bla
            bla bla bla bla bla bla bla bla description: bla bla bla bla bla bla
            bla bla bla description: bla bla bla bla bla bla bla bla bla
            description: bla bla bla bla bla bla bla bla bla description: bla
            bla bla bla bla bla bla bla bladescription: bla bla bla bla bla bla
            bla bla bla description: bla bla bla bla bla bla bla bla bla
            description: bla bla bla bla bla bla bla bla bla description: bla
            bla bla bla bla bla bla bla bla description: bla bla bla bla bla bla
            bla bla bladescription: bla bla bla bla bla bla bla bla bla
            description: bla bla bla bla bla bla bla bla bladescription: bla bla
            bla bla bla bla bla bla bla description: bla bla bla bla bla bla bla
            bla bla description: bla bla bla bla bla bla bla bla bla
            description: bla bla bla bla bla bla bla bla bla description: bla
            bla bla bla bla bla bla bla bla
          </span>
        </p>
        <section className={styles.frame3} id="genre">
          <div className={styles.genre}>Genre</div>
          <h2 className={styles.genre1} id="genre_val">
            #Genre
          </h2>
        </section>
      </div>
    </div>
  );
};

export default BookDetails;
