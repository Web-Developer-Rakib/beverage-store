import React from "react";
import Card from "../Card/Card";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className=" main-section">
        <div className="main-left">
          <Card></Card>
        </div>
        <div className="main-right">Right</div>
      </div>
    </div>
  );
};

export default Main;
