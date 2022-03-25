import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import ItemsInfo from "../ItemsInfo/ItemsInfo";
import "./Main.css";

const Main = () => {
  const [cards, setCards] = useState([]);
  const [itemInfo, setItemInfo] = useState([]);
  const addToCart = (itemsData) => {
    const newItems = [...itemInfo, itemsData];
    setItemInfo(newItems);
  };
  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      <div className=" main-section">
        <div className="main-left">
          {cards.map((card) => (
            <Card
              key={card.id}
              img={card.image}
              name={card.name}
              price={card.price}
              addToCart={addToCart}
            ></Card>
          ))}
        </div>
        <div className="main-right">
          <ItemsInfo itemInfo={itemInfo}></ItemsInfo>
        </div>
      </div>
    </div>
  );
};

export default Main;
