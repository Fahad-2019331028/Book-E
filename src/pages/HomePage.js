import { useState, useCallback } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import FilterBy from "../components/FilterBy";
import PortalPopup from "../components/PortalPopup";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
const HomePage = () => {
  const [isFilterByPopupOpen, setFilterByPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onFluentarrowImport24FilledClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='fluentarrowImport24Filled']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openFilterByPopup = useCallback(() => {
    setFilterByPopupOpen(true);
  }, []);

  const closeFilterByPopup = useCallback(() => {
    setFilterByPopupOpen(false);
  }, []);

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
    <>
      <div className={styles.homePage}>
        <img
          className={styles.bgBlurSignUpPageIcon}
          alt=""
          src="/bg_blur3.svg"
        />
        <img
          className={styles.fluentarrowImport24FilledIcon}
          alt=""
          src="/fluentarrowimport24filled.svg"
          data-scroll-to="fluentarrowImport24Filled"
          onClick={onFluentarrowImport24FilledClick}
        />
        <InputGroup className={styles.parent} width="168px" w="168px">
          <InputLeftElement
            pointerEvents="none"
            children={<ArrowBackIcon color="gray.300" />}
          />
          <Input
            variant="outline"
            textColor="#fff"
            backgroundColor="#1df659"
            borderColor="#222a36"
            focusBorderColor="#1df659"
            placeholder="Search Here"
          />
        </InputGroup>
        <div className={styles.filterByWrapper} onClick={openFilterByPopup}>
          <div className={styles.filterBy}>Filter by</div>
        </div>
        <nav className={styles.navbar} id="navbar" navbar>
          <div className={styles.icon}>
            <img
              className={styles.phbookThinIcon}
              alt=""
              src="/phbookthin.svg"
            />
            <div className={styles.bookE}>BOOK-E</div>
          </div>
          <div className={styles.button}>
            <button className={styles.homePage1}>Home Page</button>
            <div className={styles.forum}>Forum</div>
            <button className={styles.profile} onClick={onProfileClick}>
              <img className={styles.frameIcon} alt="" src="/frame4.svg" />
              <button className={styles.homePage1}>Profile</button>
            </button>
            <div className={styles.logout}>
              <button className={styles.logOut} onClick={onLogOutClick}>
                Log Out
              </button>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
          </div>
        </nav>
        <form className={styles.book1} method="post">
          <img
            className={styles.book1Child}
            alt=""
            src="/rectangle-18@2x.png"
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
          <img className={styles.book1Item} alt="" src="/rectangle-54@2x.png" />
          <Link
            className={styles.frameParent}
            to="/book-details"
            onClick={onFrameLinkClick}
          >
            <div className={styles.frame}>
              <div className={styles.frameChild} />
              <div className={styles.frameWrapper}>
                <img className={styles.frameIcon1} alt="" src="/frame10.svg" />
              </div>
            </div>
            <div className={styles.viewBook}>View Book.......</div>
          </Link>
        </form>
        <form className={styles.book11} method="post">
          <img
            className={styles.book1Child}
            alt=""
            src="/rectangle-19@2x.png"
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
          <img className={styles.book1Item} alt="" src="/rectangle-54@2x.png" />
          <Link
            className={styles.frameParent}
            to="/book-details"
            onClick={onFrameLink1Click}
          >
            <div className={styles.frame}>
              <div className={styles.frameChild} />
              <div className={styles.frameWrapper}>
                <img className={styles.frameIcon1} alt="" src="/frame11.svg" />
              </div>
            </div>
            <div className={styles.viewBook}>View Book.......</div>
          </Link>
        </form>
        <form className={styles.book12} method="post">
          <img
            className={styles.book1Child}
            alt=""
            src="/rectangle-110@2x.png"
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
          <img className={styles.book1Item} alt="" src="/rectangle-54@2x.png" />
          <Link
            className={styles.frameParent}
            to="/book-details"
            onClick={onFrameLink2Click}
          >
            <div className={styles.frame}>
              <div className={styles.frameChild} />
              <div className={styles.frameWrapper}>
                <img className={styles.frameIcon1} alt="" src="/frame12.svg" />
              </div>
            </div>
            <div className={styles.viewBook}>View Book.......</div>
          </Link>
        </form>
        <form className={styles.book13} method="post">
          <img
            className={styles.book1Child}
            alt=""
            src="/rectangle-111@2x.png"
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
          <img className={styles.book1Item} alt="" src="/rectangle-54@2x.png" />
          <Link
            className={styles.frameParent}
            to="/book-details"
            onClick={onFrameLink3Click}
          >
            <div className={styles.frame}>
              <div className={styles.frameChild} />
              <div className={styles.frameWrapper}>
                <img className={styles.frameIcon1} alt="" src="/frame12.svg" />
              </div>
            </div>
            <div className={styles.viewBook}>View Book.......</div>
          </Link>
        </form>
      </div>
      {isFilterByPopupOpen && (
        <PortalPopup
          overlayColor="rgba(112, 112, 112, 0)"
          placement="Centered"
          onOutsideClick={closeFilterByPopup}
        >
          <FilterBy onClose={closeFilterByPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HomePage;
