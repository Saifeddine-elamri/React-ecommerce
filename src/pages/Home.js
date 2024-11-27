// src/pages/Home.js
import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCart from '../components/ProductCart';

const Home = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} ajouté au panier !`);
  };

  return (
    <div className="home">
      <h2>Nos produits</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      <div className="cart">
        <h3>Panier</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {item.price} €</li>
          ))}
        </ul>
        <p>Total : {cart.reduce((total, item) => total + item.price, 0)} €</p>
      </div>
    </div>
  );
};

export default Home;
