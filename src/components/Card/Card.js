import React from "react";
import "./Card.css";

const Card = (props) => {
  const { img, name, price, addToCart } = props;
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src={img} alt=""></img>
        </div>
        <div className="card-info">
          <h2>Name: {name}</h2>
          <h3>Price: {price}$</h3>
          <button className="add-to-cart-btn" onClick={() => addToCart(props)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
