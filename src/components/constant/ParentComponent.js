// ParentComponent.js
import React, { useState } from "react";
import Product from "../product/Product";

const ParentComponent = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      imageUrl: "https://placehold.co/100x100",
      price: 10.99,
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: "https://placehold.co/100x100",
      price: 30.44,
    },
    {
      id: 3,
      name: "Product 3",
      imageUrl: "https://placehold.co/100x100",
      price: 25.99,
    },
    {
      id: 4,
      name: "Product 4",
      imageUrl: "https://placehold.co/100x100",
      price: 13.99,
    },
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          imageUrl={product.imageUrl}
          price={product.price}
          onDelete={handleDelete} // Pass onDelete function
        />
      ))}
    </div>
  );
};

export default ParentComponent;
