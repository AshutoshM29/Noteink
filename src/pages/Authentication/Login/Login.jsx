import React from "react";
import { Link } from "react-router-dom";
import "../authentication.css"

const Login = () => {
  return (
    <div className="authentication-page">
      <article className="container-form login-form">
        <div className="authentication-container-form">
          <form className="form">
            <h2 className="h2">LOGIN</h2>
            <label htmlFor="email" className="input-label">
              Email Address:{" "}
            </label>
            <div className="input-icon">
              <input
                className="input"
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email ID"
                required
              />
            </div>

            <label htmlFor="password" className="input-label">
              Password:{" "}
            </label>
            <div className="input-icon">
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                required
              />
            </div>

            <div className="checkbox-container">
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                />
                <label htmlFor="remember-me">
                  <span className="checkbox-detail">Remember me</span>
                </label>
              </div>
              <Link to="/" className="btn-link">
                Forgot Password?
              </Link>
            </div>

            <button className="btn btn-primary-solid">
              Login
            </button>
            <button
              className="btn btn-primary-outline"
            >
              Login with test credentials
            </button>
            <Link to="/signup" className="btn-link">
              Create New Account &gt;
            </Link>
          </form>
        </div>
      </article>
    </div>
  );
};

export { Login };