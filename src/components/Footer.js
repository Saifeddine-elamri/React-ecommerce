import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/about" className="footer-link">À propos</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Politique de confidentialité</a>
        </div>
        <p className="footer-text">&copy; 2024 E-Commerce. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
