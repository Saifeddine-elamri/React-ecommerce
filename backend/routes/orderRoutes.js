const express = require('express');
const { Order } = require('../models');
const router = express.Router();

// Route POST pour créer une nouvelle commande
router.post('/', async (req, res) => {
  try {
    const { cart, customer, pickupDate, pickupTime, paymentMethod } = req.body;

    // Créer une nouvelle commande
    const newOrder = await Order.create({
      cart,
      customer,
      pickupDate,
      pickupTime,
      paymentMethod
    });

    res.status(201).json({
      message: 'Commande enregistrée avec succès.',
      orderId: newOrder.id
    });
  } catch (error) {
    console.error('Erreur lors de la création de la commande:', error);
    res.status(500).json({ message: 'Erreur lors de la création de la commande.' });
  }
});

// Route GET pour obtenir toutes les commandes (optionnel, pour affichage admin)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes:', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des commandes.' });
  }
});

module.exports = router;
