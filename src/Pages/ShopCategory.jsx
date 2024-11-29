import React, { useState, useEffect } from 'react';
import productData from '../Components/assets/data';
import './ShopCategory.css';

const ShopCategory = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch and sort products for the given category
    const sortedProducts = [...(productData[category] || [])].sort(
      (a, b) => a.price - b.price
    );
    setProducts(sortedProducts);
  }, [category]);

  return (
    <div className="shop-category">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
