// Product.js
import React, { useState } from "react";
import "./Product.css";

const Product = ({ id, name, imageUrl, price, onDelete }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDeleteClick = () => {
    onDelete(id); // Invoke onDelete function with product id
  };

  return (
    <div className="product">
      <div className="product-detail">
        <img src={imageUrl} alt={name} />
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
      </div>
      <div className="product-actions">
        <div className="product-count">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <button className="delete-button" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
