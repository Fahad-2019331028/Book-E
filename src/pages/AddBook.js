import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddBook.module.css";
const AddBook = () => {
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

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.addBook}>
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
      <div className={styles.bookTypeParent}>
        <div className={styles.bookType}>Book Type</div>
        <input
          className={styles.email}
          type="text"
          placeholder="Type"
          id="book_type"
        />
      </div>
      <form className={styles.frameParent} method="post" id="add_book_form">
        <div className={styles.nameOfAuthorParent}>
          <div className={styles.nameOfAuthor}>Name Of Author:</div>
          <input
            className={styles.email}
            type="text"
            placeholder="Author"
            required
            id="author_name"
          />
        </div>
        <div className={styles.conditionParent}>
          <div className={styles.nameOfAuthor}>Condition</div>
          <input
            className={styles.email}
            type="text"
            placeholder="Condition of the book"
            required
            id="book_condition"
          />
        </div>
        <div className={styles.nameOfTheBookParent}>
          <div className={styles.nameOfAuthor}>Name Of the Book:</div>
          <input
            className={styles.email}
            type="text"
            placeholder="Title"
            required
            id="book_title"
          />
        </div>
        <input className={styles.groupChild} type="file" required />
        <div className={styles.genreParent}>
          <div className={styles.nameOfAuthor}>Genre</div>
          <input
            className={styles.email}
            type="text"
            placeholder="Genre"
            id="book_genre"
          />
        </div>
        <div className={styles.priceParent}>
          <div className={styles.nameOfAuthor}>Price</div>
          <input
            className={styles.email}
            type="text"
            placeholder="NULL if not for sale"
            id="book_price"
          />
        </div>
        <button className={styles.addBookWrapper} onClick={onFrameButtonClick}>
          <div className={styles.addBook1}>ADD BOOK</div>
        </button>
      </form>
      <img className={styles.addBookChild} alt="" src="/rectangle-72@2x.png" />
      <h1 className={styles.name}>Add A Book</h1>
    </div>
  );
};

export default AddBook;
