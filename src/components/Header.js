import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>E-commerce</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/cart">Panier</Link>
      </nav>
    </header>
  );
};

export default Header;
