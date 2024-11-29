import React from 'react';
import './ShopCategory.css';
import productData from '../Components/assets/data'; 

const ShopCategory = ({ category, addToCart }) => {
  const products = productData[category] || []; //fetch products for the given category

  return (
    <div className="shop-category">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
