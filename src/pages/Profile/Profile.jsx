import React from 'react';
import "./Profile.css";
import { NavBar } from '../../components';
import "./Profile.css";
import userImg from "../../asset/user.webp";

const Profile = () => {
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
          <span className="text-invert text-bold">Name: </span>Ashutosh Mishra
        </div>
        <div>
          <span className="text-invert text-bold">Email Id: </span>
          ashutoshrm01@gmail.com
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export { Profile };