import React from 'react'
import { useCart } from '../Context/CartContext';
import { useParams } from 'react-router-dom';
import productData from '../Components/assets/data';
import './ProductDetails.css'

const ProductDetails = () => {
  const{ category, id } = useParams();
  const { addToCart } = useCart();
  const product = productData[category]?.find((item)=>item.id===parseInt(id));
  if(!product){
    return <div>
      product Not Found
    </div>
  }
  return (
    <div className='product-details'>
      <img src={product.img} alt={product.name} className='product-detail-image'/>
      <h1>{product.name}</h1>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button className='add-to-card-btn' onClick={() => addToCart({ ...product, quantity: 1 })}>
        Add to Cart
      </button>

    </div>
  )
}

export default ProductDetails