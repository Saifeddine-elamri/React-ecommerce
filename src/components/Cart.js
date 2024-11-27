import React, { useState } from 'react';
import Panier from '../data/panier.jpg';
import './Cart.css';
import CheckoutForm from './CheckoutForm'; // Import du composant CheckoutForm

const Cart = ({ cart, onRemoveFromCart, onUpdateQuantity }) => {
  const [isCartVisible, setIsCartVisible] = useState(false); // État pour afficher/masquer le panier
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false); // État pour afficher/masquer le formulaire de commande
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0); // Nombre total d'articles dans le panier

  // Fonction pour basculer l'affichage du panier
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  // Fonction pour afficher/masquer le formulaire de commande
  const handleCheckoutClick = () => {
    setIsCheckoutVisible(true); // Affiche le formulaire de commande
  };

  return (
    <div>
      {/* Icône du panier avec badge pour afficher le nombre d'articles */}
      <div className="cart-icon" onClick={toggleCartVisibility}>
        <img src={Panier} alt="Panier" className="cart-icon-image" />
        {itemCount > 0 && <span className="cart-item-count">{itemCount}</span>} {/* Affichage du badge si le panier n'est pas vide */}
      </div>

      {/* Affichage du panier avec animation d'ouverture */}
      <div className={`cart ${isCartVisible ? 'show' : ''}`}>
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
                      <button onClick={() => onUpdateQuantity(item, 'decrease')} className="quantity-btn">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item, 'increase')} className="quantity-btn">+</button>
                    </div>
                    <button onClick={() => onRemoveFromCart(item)} className="remove-btn">Supprimer</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <p><strong>Total : </strong>{total.toFixed(2)} €</p>
              {/* Afficher le bouton Commander */}
              <button className="checkout-btn" onClick={handleCheckoutClick}>
                Commander
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Affichage du formulaire de commande (CheckoutForm) si isCheckoutVisible est true */}
      {isCheckoutVisible && (
        <CheckoutForm cart={cart} total={total} />
      )}
    </div>
  );
};

export default Cart;
