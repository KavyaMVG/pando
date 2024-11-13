import React from "react";
import topHeader from "../assets/Top Header.png";
import dropdownArrow from "../assets/Dropdown arrow.png";
import filterIcon from "../assets/Mask.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <img src={topHeader} alt="top header" />
      <div className="navbar">
        <div className="left-opt">
          <p>New Plan {">"}</p>
          <p className="active">{"<New Plan Name>"}</p>
        </div>

        <div className="right-opt">
          <button className="nav-btn">CREATE SHIPMENT</button>
        </div>
      </div>

      <div className="sub-nav">
        <div>
          <p>
            <span id="">Planning Group: </span>
            <span>Arizona Zone Retail </span>
            <img src={dropdownArrow} alt="down-arrow" />
            <span id="filter-icon">
              <img src={filterIcon} alt="filter-icon" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
