// ParentComponent.js
import React, { useState, useEffect } from "react";
import Product from "../product/Product";
import Navbar from "../navbar/Navbar";
import TotalAmount from "../total/TotalAmount";

const ParentComponent = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      imageUrl: "https://placehold.co/100x100",
      price: 10.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: "https://placehold.co/100x100",
      price: 30.44,
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      imageUrl: "https://placehold.co/100x100",
      price: 25.99,
      quantity: 1,
    },
    {
      id: 4,
      name: "Product 4",
      imageUrl: "https://placehold.co/100x100",
      price: 13.99,
      quantity: 1,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    updateTotalPrice();
    updateTotalCount();
  }, [products]);

  const updateTotalPrice = () => {
    const totalPrice = products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotalPrice(totalPrice);
  };

  const updateTotalCount = () => {
    const count = products.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setTotalCount(count);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  return (
    <div>
      <Navbar totalCount={totalCount} />
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          imageUrl={product.imageUrl}
          price={product.price}
          quantity={product.quantity}
          onQuantityChange={handleQuantityChange}
          onDelete={handleDelete}
          updateTotalPrice={updateTotalPrice}
          updateTotalCount={updateTotalCount}
        />
      ))}
      <TotalAmount totalPrice={totalPrice} />
    </div>
  );
};

export default ParentComponent;
