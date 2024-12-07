import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import CartManager from './pages/CartManager'; 
import Contact from './pages/Contact'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Header from './components/Header'; 
import CheckoutForm from './pages/CheckoutForm';

const App = () => {
  const [cart, setCart] = useState([]); 

  return (
    <Router>
       <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartManager cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckoutForm cart={cart} />} /> {/* Correctement orthographié */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
