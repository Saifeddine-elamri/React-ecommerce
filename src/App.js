import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; 
import Cart from './pages/Cart'; 
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
          <Route path="/" element={<Home products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
