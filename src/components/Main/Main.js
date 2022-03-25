import React from "react";
import Card from "../Card/Card";
import ItemsInfo from "../ItemsInfo/ItemsInfo";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className=" main-section">
        <div className="main-left">
          <Card></Card>
        </div>
        <div className="main-right">
          <ItemsInfo></ItemsInfo>
        </div>
      </div>
    </div>
  );
};

export default Main;
