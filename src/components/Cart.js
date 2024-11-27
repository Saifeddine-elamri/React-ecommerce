import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cart, onRemoveFromCart, onUpdateQuantity }) => {
  const [isCartVisible, setIsCartVisible] = useState(false); // Etat pour contrôler l'affichage du panier

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0); // Nombre total d'articles dans le panier

  // Fonction pour basculer l'affichage du panier
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible); // Bascule entre afficher et masquer
  };

  return (
    <div>
      {/* Icône du panier avec badge pour afficher le nombre d'articles */}
      <div className="cart-icon" onClick={toggleCartVisibility}>
        <img src="path/to/cart-icon.svg" alt="Panier" className="cart-icon-image" />
        {itemCount > 0 && <span className="cart-item-count">{itemCount}</span>} {/* Affichage du badge si le panier n'est pas vide */}
      </div>

      {/* Affichage du panier si isCartVisible est true */}
      {isCartVisible && (
        <div className="cart">
          <h2>Votre Panier</h2>
          {cart.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            <div>
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div>
                      <p>{item.name}</p>
                      <p>{item.price} €</p>
                      <div className="quantity">
                        <span>{item.quantity}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <p><strong>Total : </strong>{total.toFixed(2)} €</p>
                <button className="checkout-btn">Commander</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
