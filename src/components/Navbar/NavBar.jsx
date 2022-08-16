import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppTheme } from "../../context/index";
import "../Navbar/NavBar.css";
import heroIcon from "../../asset/heroIcon.png";

const NavBar = () => {
const { theme, setTheme } = useAppTheme();

const toggleAppTheme = () => {
setTheme((prev) => (prev === "light" ? "dark" : "light"));
};

useEffect(() => {
localStorage.setItem("app-theme", theme);
}, [theme]);

return (
<nav className="header">
  <header className="nav-bar">
    <div className="nav-section">
      <div className="section-navr">
        <Link to="/">
        <img className="hero-logo" loading="eager" src={heroIcon} alt="Logo" />
        </Link>
        <Link to="/home" className="nav-hero-heading">
        Notein'<span className="text-invert">K</span>
        </Link>
      </div>
      <button onClick={toggleAppTheme} className="btn btn-secondary">
        <i className="material-icons">
          {theme === "light" ? "wb_sunny" : "dark_mode"}
        </i>
      </button>
    </div>
  </header>
</nav>
);
};

export { NavBar };