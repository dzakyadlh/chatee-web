import { useNavigate } from "react-router";
import useLocalStorage from "use-local-storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Chatee from "../../assets/images/chatee.png";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const handleClick = (link) => {
    navigate(link);
  };
  return (
    <nav className="navbar" data-theme={theme}>
      <ul className="navListContainer">
        <li className="navLogo">
          <img className="chatee" src={Chatee} alt="chatee-logo" />
        </li>
        <li className="navList" onClick={() => handleClick("/signin")}>
          Sign In
        </li>
        <li className="navList" onClick={() => handleClick("/about")}>
          About
        </li>
        <li className="navList">
          <button
            className="colorModeToggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <FontAwesomeIcon
              className="colorModeToggleIcon"
              icon={faCircleHalfStroke}
              rotation={theme === "light" ? 180 : 0}
              color={theme === "light" ? "black" : "white"}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
