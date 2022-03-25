import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>
        Welcome to <span className="brand-color">Beverage Store</span>
      </h1>
      <h3>Select your favorite beverage</h3>
    </div>
  );
};

export default Header;
