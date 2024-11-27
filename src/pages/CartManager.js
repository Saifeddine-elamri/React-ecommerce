import React, { useState } from 'react';
import Cart from '../components/Cart'; // Composant affichant le panier
import ProductCart from '../components/ProductCart'; // Composant affichant chaque produit

const CartManager = ({ products }) => {
  // L'état du panier, initialisé à un tableau vide
  const [cart, setCart] = useState([]);

  // Fonction pour ajouter un produit au panier
  const handleAddToCart = (product) => {
    // Vérifier si le produit est déjà dans le panier
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      // Si le produit existe déjà, on augmente la quantité
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Sinon, on ajoute le produit avec une quantité de 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Fonction pour supprimer un produit du panier
  const handleRemoveFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  // Fonction pour mettre à jour la quantité d'un produit dans le panier
  const handleUpdateQuantity = (product, action) => {
    if (action === 'increase') {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else if (action === 'decrease' && product.quantity > 1) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  return (
    <div>
      <h1>Restaurant Gourmet</h1>

      {/* Affichage du menu de produits */}
      <div className="product-list">
        <h2>Produits disponibles</h2>
        {products.map((product) => (
          <ProductCart 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} // Permet d'ajouter un produit au panier
          />
        ))}
      </div>

      {/* Affichage du panier */}
      <Cart 
        cart={cart} 
        onRemoveFromCart={handleRemoveFromCart} 
        onUpdateQuantity={handleUpdateQuantity} 
      />
    </div>
  );
};

export default CartManager;
