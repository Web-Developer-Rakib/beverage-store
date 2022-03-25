import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1>
          Welcome to <span className="brand-color">Beverage Store</span>
        </h1>
        <h3>Select your favorite beverage</h3>
      </div>
    </div>
  );
};

export default Header;
