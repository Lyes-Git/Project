import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import LoginPage from './Pages/LoginPage'

import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from'./Pages/Product'
import Cart from './Pages/CartPage'



function App() {
  const [count, setCount] = useState(0)

  return ( 
       
      <div>
        <BrowserRouter>
        <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/> }/>
        <Route path='/rings' element={<ShopCategory category='rings'/>} />
        <Route path='/neclaces' element={<ShopCategory category='necklaces'/>}/>
        <Route path='/earings' element={<ShopCategory category='earrings'/>}/>
        <Route path='bracelets/' element={<ShopCategory category='bracelets'/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
       
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<LoginPage />} />
       </Routes >

        </BrowserRouter>
        
        
      </div>
    
  
  )
}

export default App;
