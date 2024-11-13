import React from "react";
import "./mainpage.css";
import Table from "../table/Table";

const MainPage = () => {
  return (
    <div>
      <h4 className="title">
        PLANNED
        <span className="label success">Optima Generated</span>
      </h4>
      <Table />
    </div>
  );
};

export default MainPage;
