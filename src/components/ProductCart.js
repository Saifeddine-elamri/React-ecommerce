import React from 'react';
import './ProductCart.css'; // Assurez-vous que ce fichier CSS soit bien importé

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>{product.price} €</strong></p>
      <button onClick={() => onAddToCart(product)}>Ajouter au panier</button>
    </div>
  );
};

export default ProductCard;
