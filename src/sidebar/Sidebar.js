import React, { useState } from "react";
import "./sidebar.css";
import navMain from "../assets/Side Nav Single.png";
import dashboardIcon from "../assets/Dashboard.png";
import pageIcon from "../assets/Page.png";
import MainPage from "../main/MainPage";

const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState("");

  return (
    <div className="d-flex">
      <div className="side-navbar">
        <div className={`side-nav-icons`}>
          <img src={navMain} alt="" />
          <div className="dot bg-green"></div>
        </div>
        <div className={`side-nav-icons`}>
          <img src={dashboardIcon} alt="" />
        </div>
        <div className={`side-nav-icons`}>
          <img src={pageIcon} alt="" />
          <div className="dot bg-red"></div>
        </div>
      </div>
      <div className="container bg-sheet">
        <div className="main-content">{<MainPage />}</div>
      </div>
    </div>
  );
};

export default Sidebar;
