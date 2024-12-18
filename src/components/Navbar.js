import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Restaurant Tijani</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/cart" className="nav-link">Commander</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
