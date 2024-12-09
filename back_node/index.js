const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuration de la connexion PostgreSQL
const pool = new Pool({
  user: 'postgres',  // Remplace par ton nom d'utilisateur PostgreSQL
  host: 'localhost',
  database: 'postgres',    // Remplace par le nom de ta base de données
  password: 'saif',  // Remplace par ton mot de passe PostgreSQL
  port:1999 ,  // Le port par défaut pour PostgreSQL
});

// Route pour recevoir une commande et l'enregistrer dans PostgreSQL
app.post('/api/orders', async (req, res) => {
  const { cart, customer, pickupDate, pickupTime, paymentMethod } = req.body;

  // Validation des données
  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: 'Le panier est vide.' });
  }

  if (!customer || !customer.name || !customer.email) {
    return res.status(400).json({ message: 'Les informations client sont incomplètes.' });
  }

  try {
    // Insérer la commande dans la base de données
    const result = await pool.query(
      'INSERT INTO orders (customer_name, customer_email, cart, pickup_date, pickup_time, payment_method) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [
        customer.name,
        customer.email,
        JSON.stringify(cart),  // Convertir le panier en JSON pour le stocker dans PostgreSQL
        pickupDate,
        pickupTime,
        paymentMethod,
      ]
    );

    const order = result.rows[0];  // Récupérer la commande insérée

    res.status(201).json({ message: 'Commande reçue avec succès !', order });
  } catch (error) {
    console.error('Erreur lors de l\'insertion de la commande:', error);
    res.status(500).json({ message: 'Erreur du serveur lors de l\'enregistrement de la commande.' });
  }
});

// Route pour afficher toutes les commandes (pour tester)
app.get('/api/orders', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes:', error);
    res.status(500).json({ message: 'Erreur du serveur lors de la récupération des commandes.' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
