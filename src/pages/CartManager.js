import React, { useState } from 'react';
import Cart from '../components/Cart'; // Composant affichant le panier
import ProductCart from '../components/ProductCart'; // Composant affichant chaque produit
import './CartManager.css';
import { products } from '../data/products'; // Produits

const CartManager = ({cart , setCart}) => {
  
  const [isCartVisible, setIsCartVisible] = useState(false); // État pour afficher/masquer le panier
  const [selectedCategory, setSelectedCategory] = useState('plat'); // État pour la catégorie sélectionnée

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const handleUpdateQuantity = (product, action) => {
    if (action === 'increase') {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else if (action === 'decrease' && product.quantity > 1) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Extraire toutes les catégories disponibles avec leurs images
  const categories = [...new Map(products.map(product => [
    product.category, 
    product.categoryImage
  ])).entries()];

  // Filtrer les produits en fonction de la catégorie sélectionnée
  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <div className="container">
      <h1>Restaurant Gourmet</h1>

      {/* Icône du panier avec badge pour afficher le nombre d'articles */}
      <div className="cart-icon" onClick={toggleCartVisibility}>
        <img src="https://via.placeholder.com/50" alt="Panier" className="cart-icon-image" />
        {itemCount > 0 && <span className="cart-item-count">{itemCount}</span>}
      </div>

      {/* Choix de la catégorie */}
      <div className="category-selector">
        {categories.map(([category, categoryimage]) => (
          <div
            key={category}
            className={`category-card ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            <div className="category-icon-wrapper">
              <img
                src={categoryimage}
                alt={category}
                className="category-icon"
              />
            </div>
            <div className="category-title">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
          </div>
        ))}
      </div>

      {/* Affichage du titre correspondant à la catégorie */}
      <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>

      {/* Affichage des produits filtrés */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Affichage du panier lorsque isCartVisible est true */}
      {isCartVisible && (
        <Cart
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      )}
    </div>
  );
};

export default CartManager;
