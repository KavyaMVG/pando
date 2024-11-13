import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left-opt">
          <p>New Plan {">"}</p>
          <p>{"<New Plan Name>"}</p>
        </div>

        <div className="right-opt">
          <button className="nav-btn">CREATE SHIPMENT</button>
        </div>
      </div>

      <div className="sub-nav">
        <div>
          <p>
            Planning Group: <span>Arizona Zone Retail </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
