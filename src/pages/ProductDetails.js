import React from 'react';
import { products } from '../data/products';

const ProductDetails = ({ id }) => {
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Produit introuvable</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Prix : {product.price} €</p>
      <button>Ajouter au panier</button>
    </div>
  );
};

export default ProductDetails;
