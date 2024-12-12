import React from 'react';
import { Link } from 'react-router-dom'; 
import './Shop.css';
import { useCart } from '../Context/CartContext';
import productData from '../Components/assets/data'; // Adjust path as needed

const Shop = () => {
  const { addToCart } =useCart();
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
              <Link to={`/product/${category}/${product.id}`}>
                <img src={product.img} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                </Link>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart({ ...product, quantity: 1 })} className="add-to-cart">
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
