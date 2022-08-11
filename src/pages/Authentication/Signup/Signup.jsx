import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../authentication.css"

const Signup = () => {
  return (
    <div className="authentication-page">
      <article className="container-form signup-form">
        <div className="authentication-container-form">
          <form className="form">
            <h2 className="h2">SIGN UP</h2>
            <label htmlFor="email" className="input-label">
              Email:
            </label>
            <input
              className="input"
              autoComplete="off"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email ID"
              required
            />
            <label htmlFor="fname" className="input-label">
              First Name:
            </label>
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
              required
            />

            <label htmlFor="lname" className="input-label">
              Last Name:
            </label>
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your last name"
              required
            />

            <div className="input-with-icon">
              <label htmlFor="password" className="input-label">
                Password:
              </label>
              <input
                className="input"
                type={showPasswordIcon ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
                required
              />
              <button
                className="btn-link material-icons icons-right"
              >
                "visibility"
              </button>
            </div>

            <div className="input-with-icon">
              <label htmlFor="confirm-password" className="input-label">
                Confirm Password:
              </label>
              <input
                className="input"
                type={showConfirmPasswordIcon ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your password"
                required
              />
              <button
                className="btn-link material-icons icons-right"
              >
                "visibility"
              </button>
            </div>

            <div className="checkbox-container">
              <div>
              <input className="checkbox" type="checkbox" name-="tnc" id="tnc" />
              <label htmlFor="tnc">
              <span className="checkbox-detail">
                I accept all terms and conditions
              </span>
              </label>
              </div>
            </div>

            <button className="btn btn-primary-solid">
              Create New Account
            </button>
            <Link className="btn-link" to="/login">
              Already have an account &gt;
            </Link>
          </form>
        </div>
      </article>
    </div>
  );
};

export { Signup };