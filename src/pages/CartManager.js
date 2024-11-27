// CartManager.js
import React, { useState } from 'react';
import Cart from '../components/Cart'; // Composant affichant le panier
import ProductCart from '../components/ProductCart'; // Composant affichant chaque produit
import './CartManager.css';

const CartManager = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

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

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="container">
      <h1>Restaurant Gourmet</h1>

      {/* Icône du panier avec badge pour afficher le nombre d'articles */}
      <div className="cart-icon" onClick={toggleCartVisibility}>
        <img src="https://via.placeholder.com/50" alt="Panier" className="cart-icon-image" />
        {itemCount > 0 && <span className="cart-item-count">{itemCount}</span>}
      </div>

      {/* Affichage du titre "Menu" */}
      <h2>Menu</h2> {/* Le titre Menu avec le nouveau style */}

      {/* Affichage des produits disponibles */}
      <div className="product-list">
        {products.map((product) => (
          <ProductCart 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>

      {/* Affichage du panier lorsque isCartVisible est true */}
      {isCartVisible && (
        <Cart 
          cart={cart} 
          onRemoveFromCart={handleRemoveFromCart} 
          onUpdateQuantity={handleUpdateQuantity} 
        />
      )}
    </div>
  );
};

export default CartManager;
