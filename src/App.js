import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; 
import CartManager from './pages/CartManager'; 
import Contact from './pages/Contact'; 
import { products } from './data/products'; 
import Navbar from './components/Navbar'; // Importer la Navbar
import Footer from './components/Footer'; // Importez le Footer
import Header from './components/Header'; 

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
     <Navbar/> 
     <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartManager products={products} onAddToCart={handleAddToCart}/>} />
          <Route path="/contact" element={<Contact />} />  {/* Ajout de la page de contact */}

        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
