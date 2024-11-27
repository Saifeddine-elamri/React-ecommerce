import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'; 
import CartManager from './pages/CartManager'; 
import Contact from './pages/Contact'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Header from './components/Header'; 

const App = () => {


  return (
    <Router>
     <Navbar/> 
     <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartManager />} />
          <Route path="/contact" element={<Contact />} /> 

        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
