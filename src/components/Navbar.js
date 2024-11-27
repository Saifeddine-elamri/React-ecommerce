import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assurez-vous d'importer le CSS de la navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">E-Commerce</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/cart" className="nav-link">Panier</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
