import { useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import FilterBy from "../components/FilterBy";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage1.module.css";
const HomePage1 = () => {
  const [filterByOptionAnchorEl, setFilterByOptionAnchorEl] = useState(null);
  const [isFilterByOpen, setFilterByOpen] = useState(false);
  const navigate = useNavigate();
  const filterByOptionOpen = Boolean(filterByOptionAnchorEl);
  const handleFilterByOptionClick = (event) => {
    setFilterByOptionAnchorEl(event.currentTarget);
  };
  const handleFilterByOptionClose = () => {
    setFilterByOptionAnchorEl(null);
  };

  const onLogOutClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const openFilterBy = useCallback(() => {
    setFilterByOpen(true);
  }, []);

  const closeFilterBy = useCallback(() => {
    setFilterByOpen(false);
  }, []);

  return (
    <>
      <div className={styles.homePage}>
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
            <button className={styles.homePage1}>Home Page</button>
            <div className={styles.forum}>Forum</div>
            <button className={styles.profile}>
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
        <img className={styles.bgBlurHomePageIcon} alt="" src="/bg_blur8.svg" />
        <div className={styles.homePageInner}>
          <img className={styles.frameChild} alt="" src="/rectangle-6@2x.png" />
        </div>
        <div className={styles.systemUiconssearchParent}>
          <img
            className={styles.systemUiconssearch}
            alt=""
            src="/systemuiconssearch.svg"
          />
          <div className={styles.forum}>Search by name</div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.search}>
              <span className={styles.searchTxt}>
                <p className={styles.search1}>search</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.filterByOption} onClick={openFilterBy}>
          <Button
            sx={{ width: 118 }}
            id="button-filter by"
            aria-controls="menu-filter by"
            aria-haspopup="true"
            aria-expanded={filterByOptionOpen ? "true" : undefined}
            onClick={handleFilterByOptionClick}
            color="success"
          >
            filter by
          </Button>
          <Menu
            anchorEl={filterByOptionAnchorEl}
            open={filterByOptionOpen}
            onClose={handleFilterByOptionClose}
          />
        </div>
        <div className={styles.allBooks}>ALL Books</div>
      </div>
      {isFilterByOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilterBy}
        >
          <FilterBy onClose={closeFilterBy} />
        </PortalPopup>
      )}
    </>
  );
};

export default HomePage1;
