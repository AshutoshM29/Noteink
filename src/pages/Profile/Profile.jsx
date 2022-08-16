import React from 'react';
import "./Profile.css";
import { useEffect } from "react";
import { useAppTheme, useAuth } from "../../context";
import { NavBar } from '../../components';
import "./Profile.css";
import userImg from "../../asset/user.webp";

const Profile = () => {
const { theme } = useAppTheme();
const { authUser } = useAuth();

useEffect(() => {
theme === "light"
? (document.body.style.backgroundColor = "")
: (document.body.style.backgroundColor = "var(--gray-dark)");
}, [theme]);

return (
<div className="profile-page-wrapper">
  <NavBar />
  <div className="profile-page-container">
    <div className="notes-hero-heading h1 text-bold">
      <span className="text-invert">Profile</span>
    </div>
    <div className="notes-hero-sub-heading">
      <img src={userImg} alt="profile-img" className="avatar" />
    </div>
    <div className="profile-page-content">
      <div className="h4">
        <div>
          <span className="text-invert text-bold">Name: </span>{" "}
          {`${authUser.firstName} ${authUser.lastName}`}
        </div>
        <div>
          <span className="text-invert text-bold">Email Id: </span>
          {`${authUser.email}`}
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export { Profile };