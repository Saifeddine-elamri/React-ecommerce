import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Panier from '../data/panier.jpg';
import './Cart.css';

const Cart = ({ cart, onRemoveFromCart, onUpdateQuantity }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      <div className="cart-icon" onClick={toggleCartVisibility}>
        <img src={Panier} alt="Panier" className="cart-icon-image" />
        {itemCount > 0 && <span className="cart-item-count">{itemCount}</span>}
      </div>

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
              {/* Lien vers la page de commande */}
              <Link to="/checkout" className="checkout-btn">
                Commander
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

