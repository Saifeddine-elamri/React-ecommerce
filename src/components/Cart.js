import Panier from '../data/panier.jpg';
import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cart, onRemoveFromCart, onUpdateQuantity }) => {
  const [isCartVisible, setIsCartVisible] = useState(false); // Etat pour contrôler l'affichage du panier
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0); // Nombre total d'articles dans le panier

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible); // Bascule entre afficher et masquer
  };

  // Fonction pour augmenter la quantité d'un produit
  const handleIncrease = (item) => {
    onUpdateQuantity(item, 'increase');
  };

  // Fonction pour diminuer la quantité d'un produit
  const handleDecrease = (item) => {
    onUpdateQuantity(item, 'decrease');
  };

  // Fonction pour supprimer un produit du panier
  const handleRemove = (item) => {
    onRemoveFromCart(item);
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
                      <button onClick={() => handleDecrease(item)} className="quantity-btn">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrease(item)} className="quantity-btn">+</button>
                    </div>
                    <button onClick={() => handleRemove(item)} className="remove-btn">Supprimer</button>
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
    </div>
  );
};

export default Cart;
