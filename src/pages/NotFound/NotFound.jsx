import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppTheme } from "../../context";
import "./NotFound.css";

const NotFound = () => {
  const { theme } = useAppTheme();

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "")
      : (document.body.style.backgroundColor = "var(--gray-dark)");
  }, [theme]);

  return (
    <div className="page-container">
      <h1 className="page-heading">404</h1>
      <h5 className="page-subheading">Page not found</h5>
      <Link to="/home" className="btn btn-nfound">
        Go back to home
      </Link>
    </div>
  );
};

export { NotFound };