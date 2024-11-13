import React, { useState } from "react";
import vehicleIcon from "../assets/Vehicle Icon.png";
import sourceDestIcon from "../assets/Source Destination.png";
import arrowDown from "../assets/Arrow Stroke.png";
import columnSelect from "../assets/Column-Select.svg";
import materialIcon from "../assets/Material Icon.png";

import "./table.css";
import { data } from "../data";
import MapModal from "../mapmodal/MapModal";

const headers = [
  <input type="checkbox" />,
  "S.NO.",
  "ORIGIN",
  "",
  "DESTINATION",
  "CARRIER | TYPE",
  "MAX UTILISATION | VEHICLE",
  <span>
    TOTAL | WEIGHT | QTY <img src={arrowDown} alt="" />
  </span>,
  <img src={columnSelect} alt="" />,
];

function Table() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleModalClose = () => setModalOpen(false);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            const isActive = selectedRow === idx;
            return (
              <tr
                key={idx}
                onClick={() => {
                  setSelectedRow(idx);
                  setModalOpen(true);
                }}
                style={{
                  backgroundColor: isActive ? "#E9F1F5" : "#fff",
                  cursor: "pointer",
                }}
              >
                <td>
                  <img src={vehicleIcon} alt="" />
                </td>
                <td className="text-medium">{row.serialNo}</td>
                <td>
                  <span className="text-bold">{row.origin}</span> <br />
                  <span className="sub-text">TX, {"<Pincode>"}</span>
                </td>
                <td className="relative w-8">
                  <span className="source-text">1 pickup(s)</span>
                  <span className="dest-text">2 drop(s)</span>
                  <img src={sourceDestIcon} alt="" />
                </td>
                <td>
                  <span className="text-bold">{row.destination}</span> <br />
                  <span className="sub-text">TX, {"<Pincode>"}</span>
                </td>
                <td>
                  <span className="text-bold">{row.carrierType.carrier}</span>{" "}
                  <br />
                  <span className="sub-text">{row.carrierType.type}</span>
                </td>
                <td>
                  <div className="d-flex vehicle">
                    <span>{row.maxUtilizationVehicle.percentage} %</span>
                    <span
                      className="progress"
                      style={{
                        width: `${row.maxUtilizationVehicle.percentage - 50}%`,
                      }}
                    ></span>
                    <span>Wt</span>
                  </div>
                  <span className="sub-text">
                    {row.maxUtilizationVehicle.vehicle}
                  </span>
                </td>
                <td>
                  <div className="d-flex quantity">
                    <span className="text-medium">
                      {row.totalWeightQuantity.weightInLBS} lbs
                    </span>
                    <span>
                      <span className="label"> Orders </span>
                      <span>{row.totalWeightQuantity.orders} </span>
                    </span>
                  </div>
                  <div className="d-flex quantity">
                    <span className="text-small">
                      <span className="label"> Qty </span>
                      <span>{row.totalWeightQuantity.quantity} pcs</span>
                    </span>
                    <span className="text-small">2 pallets</span>
                  </div>
                </td>
                <td>
                  <img src={materialIcon} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <MapModal modalOpen={modalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default Table;
