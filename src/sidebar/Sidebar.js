import React, { useState } from "react";
import "./sidebar.css";
import {
  faClipboardList,
  faFile,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainPage from "../main/MainPage";

const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="side-navbar">
      <div
        className={`side-nav-icons ${
          selectedIcon === "clipboard" ? "selected" : ""
        }`}
        onClick={() => handleIconClick("clipboard")}
      >
        <FontAwesomeIcon icon={faClipboardList} />
      </div>
      <div
        className={`side-nav-icons ${
          selectedIcon === "file" ? "selected" : ""
        }`}
        onClick={() => handleIconClick("file")}
      >
        <FontAwesomeIcon icon={faFile} />
      </div>
      <div
        className={`side-nav-icons ${
          selectedIcon === "table" ? "selected" : ""
        }`}
        onClick={() => handleIconClick("table")}
      >
        <FontAwesomeIcon icon={faTableList} />
      </div>

      <div className="main-content">
        {selectedIcon === "file" && <MainPage />}
      </div>
    </div>
  );
};

export default Sidebar;
