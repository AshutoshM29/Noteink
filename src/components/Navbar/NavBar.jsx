import { Link } from "react-router-dom";
import "../Navbar/NavBar.css";
import heroIcon from "../../asset/heroIcon.png";

const NavBar = () => {
return (
<nav className="header">
  <header className="nav-bar">
    <div className="nav-section">
      <div className="section-navr">
        <Link to="/">
        <img className="hero-logo" loading="eager" src={heroIcon} alt="Logo" />
        </Link>
        <Link to="/" className="nav-hero-heading">
        Notein'<span className="text-invert">K</span>
        </Link>
      </div>
      <button className="btn btn-secondary">
        <i className="material-icons">
        wb_sunny
        </i>
      </button>
    </div>
  </header>
</nav>
);
};

export { NavBar };