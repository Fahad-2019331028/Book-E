import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import UploaderProfile from "./pages/UploaderProfile";
import BookDetails from "./pages/BookDetails";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import EditProfile from "./pages/EditProfile";
import AddBook from "./pages/AddBook";
import HomePage1 from "./pages/HomePage1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/uploader-profile":
        title = "";
        metaDescription = "";
        break;
      case "/book-details":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/main-page":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/add-book":
        title = "";
        metaDescription = "";
        break;
      case "/home-page1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UserProfile />} />
      <Route path="/uploader-profile" element={<UploaderProfile />} />
      <Route path="/book-details" element={<BookDetails />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/home-page1" element={<HomePage1 />} />
    </Routes>
  );
}
export default App;
