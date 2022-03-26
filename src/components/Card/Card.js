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
            <span>ADD TO CART</span>
            <span>
              <svg
                className="cart-icon"
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                width={20}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
