import React from "react";
import "./ItemsCart.css";
const ItemsCart = (props) => {
  const { itemInfo, setItemInfo } = props;
  const handleDeleteItem = (id) => {
    const deletedItem = itemInfo.filter((item) => item.id !== id);
    setItemInfo(deletedItem);
  };
  return (
    <div className="info">
      <div>
        <h2 className="info-title">Selected Items</h2>
      </div>
      <div>
        {itemInfo.map((item) => (
          <div className="items" key={item.id}>
            <img src={item.img} alt=""></img>
            <p className="item-name">{item.name}</p>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="del-item"
            >
              X
            </button>
          </div>
        ))}
        <div className="items-btn-set">
          <button className="item-btns random">Choose 1 for me</button>
          <button className="item-btns clear">Clear all</button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCart;
