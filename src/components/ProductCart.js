import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>{product.price} €</strong></p>
      <button onClick={() => onAddToCart(product)}>Ajouter au panier</button>
    </div>
  );
};

export default ProductCard;
