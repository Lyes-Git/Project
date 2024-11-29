import React from 'react'
import  productData  from '../assets/data'
import './Item.css'

const Item = ({ category }) => {
    const products = category ? productData[category] : [];

  return (
    <div className="shop-container">
      {category ? (
        <div className="shop-products">
          {products.map((item) => (
            <div key={item.id} className="shop-product-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <h2>Please select a category from the menu above.</h2>
      )}
    </div>
  );
};


export default Item