import React from 'react'
//import productData from '../assets/data.js'
import Item from '../Components/Item/Item.jsx';

   const ShopCategory=({category}) =>{
  

  return (
    <div>
      <Item category={category}/>
    </div>
    
    
  );
}

export default ShopCategory
