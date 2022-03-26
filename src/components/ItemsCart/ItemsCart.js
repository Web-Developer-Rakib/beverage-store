import React, { useState } from "react";
import "./ItemsCart.css";
const ItemsCart = (props) => {
  const { itemInfo } = props;
  const [index, setIndex] = useState([props]);

  // const randomInfo = () => {

  //   return random;
  // };
  const chooseOne = () => {
    const newIndex = Math.random() * (9 - 1) + 1;
    setIndex(newIndex);
  };
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
        <div>name: {index[chooseOne()]}</div>
        <div className="items-btn-set">
          <button className="item-btns random" onClick={chooseOne()}>
            Choose 1 for me
          </button>
          <button className="item-btns clear">Clear all</button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCart;
