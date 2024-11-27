import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; 
import CartManager from './pages/CartManager'; 
import { products } from './data/products'; 
import Navbar from './components/Navbar'; // Importer la Navbar
import Footer from './components/Footer'; // Importez le Footer

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartManager products={products} onAddToCart={handleAddToCart}/>} />
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
