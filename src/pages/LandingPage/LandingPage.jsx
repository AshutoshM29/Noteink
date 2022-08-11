import React from 'react';
import "./LandingPage.css";
import HeroImage from "../../asset/HeroImage.gif";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      <div className="container-landing-page">
        <div className="content-landing-page">
          <h1 className="heading-hero">
            Notein'<span className="text-invert">K</span>
          </h1>
          <h2 className="sub-heading">
            Meet your modern
            <span className="text-invert"> Note Taking App</span>
          </h2>
          <p className="decs-landing">
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
          <Link to="/signup">
            <button className="btn btn-primary-solid">Join Now</button>
          </Link>
          <Link to="/login">
            <p className="text-link">Already have an account?</p>
          </Link>
        </div>

        <div className="container-image">
          <img src={HeroImage} alt="hero-image" className="img-responsive" />
        </div>
      </div>
    </div>
  );
};

export { LandingPage };