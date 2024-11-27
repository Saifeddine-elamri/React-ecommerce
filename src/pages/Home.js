import React from 'react';
import ProductCart from '../components/ProductCart'; // Composant pour afficher chaque produit

const Home = ({ products, onAddToCart }) => {
  return (
    <div className="home">
      <header className="restaurant-info">
        <h1>Bienvenue au Restaurant Gourmet</h1>
        <p>Découvrez nos plats délicieux faits maison, prêts à être commandés !</p>
      </header>
      <h2>Produits disponibles</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCart 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} // Permet d'ajouter un produit au panier
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
