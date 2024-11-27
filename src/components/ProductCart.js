// src/components/ProductCart.js
import React from 'react';

const ProductCart = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price} €</p>
      <button onClick={() => onAddToCart(product)}>Ajouter au panier</button>
    </div>
  );
};

export default ProductCart;
