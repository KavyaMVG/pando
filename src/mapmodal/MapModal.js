import React, { useState, useEffect } from "react";
import "./mapmodal.css";
import mapImage from "../assets/map.png";
import closeIcon from "../assets/Close.png";

const MapModal = ({ modalOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("MAP");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [modalOpen]);

  if (!modalOpen && !isVisible) return null;
  return (
    <div className={`map-modal ${modalOpen ? "open" : "close"}`}>
      <div className="modal-header">
        <div className="option-one">
          <p>PLANNED SHIPMENT 01</p>
        </div>

        <div className="option-two">
          <button className="vis-btn">3D VISUALISATION</button>
          <img
            src={closeIcon}
            alt="close"
            onClick={onClose}
            className="close-icon"
          />
        </div>
      </div>
      <div className="modal-tabs">
        <div
          onClick={() => handleTabClick("MAP")}
          className={activeTab === "MAP" ? "tab-active" : ""}
        >
          MAP
        </div>
        <div
          className={activeTab === "DETAILS" ? "tab-active" : ""}
          onClick={() => handleTabClick("DETAILS")}
        >
          DETAILS
        </div>
        <div
          className={activeTab === "RATES" ? "tab-active" : ""}
          onClick={() => handleTabClick("RATES")}
        >
          RATES
        </div>
      </div>
      <img src={mapImage} alt="map" />
    </div>
  );
};

export default MapModal;
