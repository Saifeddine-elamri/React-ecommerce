const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Stockage des commandes (en mémoire pour simplification)
let orders = [];

// Route pour recevoir une commande
app.post('/api/orders', (req, res) => {
  const { cart, customer } = req.body;

  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: 'Le panier est vide.' });
  }

  if (!customer || !customer.name || !customer.email) {
    return res.status(400).json({ message: 'Les informations client sont incomplètes.' });
  }

  const order = {
    id: orders.length + 1,
    cart,
    customer,
    date: new Date(),
  };

  orders.push(order);

  res.status(201).json({ message: 'Commande reçue avec succès !', order });
});

// Route pour afficher toutes les commandes (pour tester)
app.get('/api/orders', (req, res) => {
  res.status(200).json(orders);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
