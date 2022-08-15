import React from 'react';
import { NavBar, SearchBar, SideBar } from "../../components";
import "../../pages/pages.css";

const Label = () => {
  return (
    <div className="notes-align">
      <NavBar />
      <div className="sidebar-align">
        <SideBar />
      </div>
      <div className="hero-img">
        <SearchBar />
      </div>
      <h4 className="section-header">LABEL</h4>
      <div className="container-main">
        <div className="container-note">
          <div className="container-ntitle">
            <h2 className="heading-note">Title</h2>
            <div>
              <i className= "material-icons icon-pin">
                push_pin
              </i>
            </div>
          </div>
          <div className="notes-body">Note body</div>
          <div className="container-label">
            labels
          </div>
          <div className="notes-menu">
            <div className="date-n-time">
              26/06/2022
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export { Label };