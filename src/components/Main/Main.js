import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import ItemsInfo from "../ItemsInfo/ItemsInfo";
import "./Main.css";

const Main = () => {
  const [cards, setCards] = useState([]);
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
            ></Card>
          ))}
        </div>
        <div className="main-right">
          <ItemsInfo></ItemsInfo>
        </div>
      </div>
    </div>
  );
};

export default Main;
