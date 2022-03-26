import React from "react";
import "./ItemsInfo.css";

const ItemsInfo = (props) => {
  const { itemInfo } = props;
  return (
    <div className="info">
      <h2 className="info-title">Selected Items</h2>
      {itemInfo.map((item) => (
        <div className="items">
          <img src={item.img} alt=""></img>
          <p className="item-name">{item.name}</p>
          <button className="del-item">X</button>
        </div>
      ))}
      <div className="items-btn-set">
        <button className="item-btns random">Chose 1 Bottle</button>
        <button className="item-btns clear">Clear all</button>
      </div>
    </div>
  );
};

export default ItemsInfo;
