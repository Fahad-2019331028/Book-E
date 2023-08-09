import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HOme1.css";
const HOme1 = () => {
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="home3">
      <nav className="navbar4" id="nav">
        <div className="book-e-icon4">
          <img className="vector-icon4" alt="" src="/vector2.svg" />
          <div className="book-e4">Book-E</div>
        </div>
        <button className="profile2">
          <div className="profile3">Profile</div>
        </button>
        <div className="sl4">
          <button className="profile4">
            <div className="profile3">Profile</div>
          </button>
          <button className="logout" onClick={onLogoutClick}>
            <div className="log-out4">Log Out</div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default HOme1;
