import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import ItemsCart from "../ItemsCart/ItemsCart";
import "./Main.css";
const Main = () => {
  const [cards, setCards] = useState([]);
  const [itemInfo, setItemInfo] = useState([]);

  const addToCart = (itemsData, id) => {
    let newItems = [...itemInfo, itemsData];
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
              id={card.id}
              img={card.image}
              name={card.name}
              price={card.price}
              addToCart={addToCart}
            ></Card>
          ))}
        </div>
        <div className="main-right">
          <ItemsCart itemInfo={itemInfo}></ItemsCart>
        </div>
      </div>
    </div>
  );
};

export default Main;
