import React from "react";
import "./ItemsCart.css";
const ItemsCart = (props) => {
  const { itemInfo } = props;
  console.log(itemInfo);
  return (
    <div className="info">
      <div>
        <h2 className="info-title">Selected Items</h2>
      </div>
      <div>
        {itemInfo.map((item) => (
          <div className="items">
            <img src={item.img} alt=""></img>
            <p className="item-name">{item.name}</p>
            <button className="del-item">X</button>
          </div>
        ))}
      </div>
      <div className="items-btn-set">
        <button className="item-btns random">Choose 1 Bottle</button>
        <button className="item-btns clear">Clear all</button>
      </div>
    </div>
  );
};

export default ItemsCart;
