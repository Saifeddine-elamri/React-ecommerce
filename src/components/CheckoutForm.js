import React, { useState } from 'react';
import './CheckoutForm.css';

const Checkout = ({ cart }) => {
  const [isSubmitting, setIsSubmitting] = useState(false); // État pour gérer l'envoi
  const [feedback, setFeedback] = useState(null); // État pour les messages de retour de l'API
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
  }); // État pour les informations du client

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Gestion des champs Nom et Email
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Fonction pour envoyer les données à l'API
const handleOrderSubmission = async () => {
  setIsSubmitting(true); // Bloque l'interaction pendant l'envoi
  setFeedback(null); // Réinitialise les messages de retour

  const orderData = {
    cart: cart.map(item => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
    customer: customerInfo, // Inclure les données du formulaire
  };

  try {
    const response = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      setFeedback({ type: 'success', message: 'Commande validée avec succès !' });
       // Exécute la logique de confirmation côté parent
    } else {
      const errorData = await response.json();
      setFeedback({ type: 'error', message: errorData.message || 'Une erreur est survenue.' });
    }
  } catch (error) {
    setFeedback({ type: 'error', message: 'Impossible de valider la commande. Veuillez réessayer.' });
  } finally {
    setIsSubmitting(false); // Réactive l'interaction
  }
};



  return (
    <div className="checkout-container">
      <h2>Récapitulatif de votre commande</h2>
      <div className="checkout-summary">
        {cart.map((item, index) => (
          <div key={index} className="checkout-item">
            <img src={item.image} alt={item.name} className="checkout-item-image" />
            <div className="checkout-item-details">
              <h3>{item.name}</h3>
              <p>
                Prix unitaire : {item.price.toFixed(2)} € | Quantité : {item.quantity}
              </p>
              <p>Prix : {(item.price * item.quantity).toFixed(2)} €</p>
            </div>
          </div>
        ))}
        <div className="checkout-total">
          <h3>Total : {total.toFixed(2)} €</h3>
        </div>
      </div>

      <div className="customer-info">
        <h3>Vos informations</h3>
        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          value={customerInfo.name}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={customerInfo.email}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      {feedback && (
        <div className={`feedback ${feedback.type}`}>
          {feedback.message}
        </div>
      )}

      <div className="checkout-actions">
        <button
          className="confirm-btn"
          onClick={handleOrderSubmission}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Valider la commande'}
        </button>
        <button className="cancel-btn" >
          Annuler
        </button>
      </div>
    </div>
  );
};

export default Checkout;
