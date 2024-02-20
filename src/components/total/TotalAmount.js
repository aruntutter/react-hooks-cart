import React from "react";
import "./TotalAmount.css";

const TotalAmount = ({ totalPrice }) => {
  return (
    <div className="total-amount">
      <p>Total Amount: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default TotalAmount;
