import React from "react";
import "./ItemsInfo.css";

const ItemsInfo = () => {
  return (
    <div>
      <div>
        <h2 className="info-title">Selected Items</h2>
        <div className="items">
          <img src="https://picsum.photos/id/237/200/300" alt=""></img>
          <p className="item-name">Name</p>
          <button className="del-item">X</button>
        </div>
        <div className="items-btn-set">
          <button className="item-btns random">Chose 1 Bottle</button>
          <button className="item-btns clear">Clear all</button>
        </div>
      </div>
    </div>
  );
};

export default ItemsInfo;
