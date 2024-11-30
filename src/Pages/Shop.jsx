import React from 'react';
import './Shop.css';
import productData from '../Components/assets/data'; // Adjust path as needed

const Shop = ({ addToCart }) => {
  return (
    <div className="shop">
      <h1 className="shop-title">Our Collection</h1>
      {Object.entries(productData).map(([category, products]) => (
        <div key={category} className="product-category">
          <h2 className="category-title">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.img} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)} className="add-to-cart">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
