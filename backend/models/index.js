const { Sequelize, DataTypes } = require('sequelize');

// Connexion à PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

// Définir le modèle `Order`
const Order = sequelize.define('Order', {
  cart: {
    type: DataTypes.JSONB,  // Utilisation du type JSON pour stocker le panier
    allowNull: false
  },
  customer: {
    type: DataTypes.JSONB,  // Stocker les informations client en format JSON
    allowNull: false
  },
  pickupDate: {
    type: DataTypes.STRING,  // Date de retrait
    allowNull: false
  },
  pickupTime: {
    type: DataTypes.STRING,  // Heure de retrait
    allowNull: false
  },
  paymentMethod: {
    type: DataTypes.ENUM('cash', 'card'),  // Méthode de paiement
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'  // Statut de la commande (par défaut : en attente)
  }
});

// Synchronisation du modèle avec la base de données
sequelize.sync()
  .then(() => console.log('Modèle synchronisé avec PostgreSQL'))
  .catch(err => console.log('Erreur lors de la synchronisation du modèle:', err));

module.exports = { sequelize, Order };
