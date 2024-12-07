import React, { useState } from 'react';
import './CheckoutForm.css';

const Checkout = ({ cart }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
  });
  const [pickupDate, setPickupDate] = useState(''); // État pour la date de retrait
  const [pickupTime, setPickupTime] = useState(''); // État pour l'heure de retrait
  const [paymentMethod, setPaymentMethod] = useState(''); // État pour la méthode de paiement

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Gérer les changements dans les champs de saisie
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePickupDateChange = (e) => {
    setPickupDate(e.target.value); // Gérer la date de retrait
  };

  const handlePickupTimeChange = (e) => {
    setPickupTime(e.target.value); // Gérer l'heure de retrait
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value); // Gérer la méthode de paiement choisie
  };

  const handleOrderSubmission = async () => {
    setIsSubmitting(true);
    setFeedback(null);

    const orderData = {
      cart: cart.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      customer: customerInfo,
      pickupDate, // Passer la date de retrait
      pickupTime, // Passer l'heure de retrait
      paymentMethod, // Passer la méthode de paiement choisie
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        setFeedback({ type: 'success', message: 'Commande validée avec succès !' });
      } else {
        const errorData = await response.json();
        setFeedback({ type: 'error', message: errorData.message || 'Une erreur est survenue.' });
      }
    } catch (error) {
      setFeedback({ type: 'error', message: 'Impossible de valider la commande. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Récapitulatif de votre commande</h2>

      {/* Afficher la date et l'heure de retrait */}
      {pickupDate && pickupTime && (
        <p><strong>Date et heure de retrait : </strong>{pickupDate} à {pickupTime}</p>
      )}

      {/* Si le panier est vide, afficher un message */}
      {cart.length === 0 ? (
        <p className="empty-cart-message">Votre panier est vide.</p>
      ) : (
        <div className="checkout-summary">
          {cart.map((item, index) => (
            <div key={index} className="checkout-item">
              <img src={item.image} alt={item.name} className="checkout-item-image" />
              <div className="checkout-item-details">
                <h3>{item.name}</h3>
                <p>
                  Prix unitaire : {item.price.toFixed(2)} € | Quantité : {item.quantity}
                </p>
                <p>Prix total : {(item.price * item.quantity).toFixed(2)} €</p>
              </div>
            </div>
          ))}
          <div className="checkout-total">
            <h3>Total : {total.toFixed(2)} €</h3>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <>
          {/* Informations client */}
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

          {/* Sélection de la date et de l'heure de retrait */}
          <div className="pickup-details">
            <h3>Choisir la date et l'heure de retrait</h3>
            <input
              type="date"
              value={pickupDate}
              onChange={handlePickupDateChange}
              className="input-field"
              required
            />
            <input
              type="time"
              value={pickupTime}
              onChange={handlePickupTimeChange}
              className="input-field"
              required
            />
          </div>

          {/* Sélection de la méthode de paiement */}
     

          {/* Notice de paiement */}
          <div className="payment-notice">
            <p><strong>Notice de paiement :</strong></p>
            <p>Vous pouvez régler votre commande soit <strong>en espèces</strong>, soit <strong>par carte bancaire</strong> au moment du retrait.</p>
          </div>
        </>
      )}

      {/* Affichage des retours de validation */}
      {feedback && (
        <div className={`feedback ${feedback.type}`}>
          {feedback.message}
        </div>
      )}

      {/* Actions de confirmation et annulation */}
      <div className="checkout-actions">
        <button
          className="confirm-btn"
          onClick={handleOrderSubmission}
          disabled={isSubmitting || cart.length === 0}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Valider la commande'}
        </button>

        {/* Bouton d'annulation qui pourrait rediriger ou fermer la page */}
        <button
          className="cancel-btn"
          onClick={() => window.history.back()} // Retour à la page précédente
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

export default Checkout;
