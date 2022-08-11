import React from 'react';
import { Link } from "react-router-dom";
import "../SideBar/SideBar.css";
import userImg from "../../asset/user.webp";

const SideBar = () => {

  return (
      <aside className="section-filter">
        <div className="menu-aside">
          <div className="options-menu">
            <ul className="list-aside">
              <Link to="/home">
                <li className="link-aside">
                  <i className="material-icons-round">home</i>
                  <div>Home</div>
                </li>
              </Link>
              <Link to="/label">
                <li className="link-aside">
                  <i className="material-icons">label</i>
                  <div>Labels</div>
                </li>
              </Link>
              <Link to="/archive">
                <li className="link-aside">
                  <i className="material-icons">archive</i>
                  <div>Archive</div>
                </li>
              </Link>
              <Link to="/trash">
                <li className="link-aside">
                  <i className="material-icons">delete</i>
                  <div>Trash</div>
                </li>
              </Link>
              <Link to="/profile">
                <li className="link-aside">
                  <i className="material-icons">account_circle</i>
                  <div>Profile</div>
                </li>
              </Link>
              <li>
                <button
                  className="btn btn-primary-solid"
                >
                  <i>
                  Create New Note
                  </i>
                </button>
              </li>
            </ul>
          </div>

          <div className="profile-details">
            <ul className="list-aside">
              <li className="aside-profile">
                <Link to="/profile">
                <img src={userImg} alt="profile-img" className="avatar" />
                </Link>
                <p className="username">Ashutosh Mishra</p>
                <button className="btn btn-icon">
                  <i className="material-icons icon-profile">
                    logout
                  </i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
  );
};

export { SideBar };