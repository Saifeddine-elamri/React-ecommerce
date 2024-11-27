import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Votre Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - {item.price} €</li>
            ))}
          </ul>
          <p><strong>Total : </strong>{cart.reduce((total, item) => total + item.price, 0)} €</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
