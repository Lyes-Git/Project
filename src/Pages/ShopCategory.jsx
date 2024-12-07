import React from 'react';
import './ShopCategory.css';
import productData from '../Components/assets/data.js'; 
import { useCart } from '../Context/CartContext.jsx';

const ShopCategory = ({ category }) => {
  const {addToCart}=useCart();
  // Fetch products for the given category
  const products = productData[category] || []; 

  // Sort products by price (low to high)
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  return (
    <div className="shop-category">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Collection</h1>
      {sortedProducts.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        <div className="product-grid">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart({ ...product, quantity: 1})}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopCategory;