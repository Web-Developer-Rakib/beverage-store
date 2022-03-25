import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src="https://picsum.photos/id/237/200/300" alt=""></img>
        </div>
        <div className="card-info">
          <h2>Name: Pepsi</h2>
          <h3>5$</h3>
          <button className="add-to-cart-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
