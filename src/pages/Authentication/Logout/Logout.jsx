import React from 'react';
import { Link } from "react-router-dom";
import "../authentication.css";

const Logout = () => {
  return (
    <div className="authentication-page">
      <div className="container-form login-form">
      <div className="content-logout">
        <h2 className="h2 text-invert">Logged Out</h2>
        <Link to="/login" className="btn btn-primary-solid">
          Sign in Again
        </Link>
      </div>
      </div>
    </div>
  );
};

export { Logout };