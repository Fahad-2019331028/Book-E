import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import HOme from "./pages/HOme";
import HOme1 from "./pages/HOme1";
import SignupPage1 from "./pages/SignupPage1";
import Desktop1 from "./pages/Desktop1";
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
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/main-page":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/home1":
        title = "";
        metaDescription = "";
        break;
      case "/signup-page":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
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
      <Route path="/" element={<SignUpPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/home" element={<HOme />} />
      <Route path="/home1" element={<HOme1 />} />
      <Route path="/signup-page" element={<SignupPage1 />} />
      <Route path="/desktop-1" element={<Desktop1 />} />
    </Routes>
  );
}
export default App;
