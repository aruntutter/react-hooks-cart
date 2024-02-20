// Product.js
import React, { useState } from "react";
import "./Product.css";

const Product = ({
  id,
  name,
  imageUrl,
  price,
  quantity,
  onQuantityChange,
  onDelete,
  updateTotalCount,
}) => {
  // const [, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1); // Decrease quantity
      updateTotalCount(); // Update total count
    }
  };

  const handleIncrease = () => {
    onQuantityChange(id, quantity + 1); // Increase quantity
    updateTotalCount(); // Update total count
  };

  const handleDeleteClick = () => {
    onDelete(id);
    updateTotalCount();
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
