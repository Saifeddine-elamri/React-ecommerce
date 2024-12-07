const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
require('dotenv').config();

// Initialiser l'application Express
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à PostgreSQL avec Sequelize
sequelize.authenticate()
  .then(() => console.log('Connexion à la base de données PostgreSQL réussie'))
  .catch(err => console.error('Impossible de se connecter à PostgreSQL:', err));

// Importer les routes
const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
