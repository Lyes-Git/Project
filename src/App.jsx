import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import LoginPage from './Pages/LoginPage'

import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/CartPage'



function App() {
  const [userName, setUserName] = useState(null);

  // Function to update username after login
  const handleLogin = (name) => {
    setUserName(name);
  };

  return (

    <div>
      <BrowserRouter>
      <Navbar userName={userName} /> {/* Pass userName to Navbar */}
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/rings' element={<ShopCategory category='rings' />} />
          <Route path='/neclaces' element={<ShopCategory category='necklaces' />} />
          <Route path='/earings' element={<ShopCategory category='earrings' />} />
          <Route path='bracelets/' element={<ShopCategory category='bracelets' />} />
          <Route path='/product' element={<Product />} />
          <Route path=':productId' element={<Product />} />

          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/login' element={<Cart />} /> */}
          <Route path='/signup' element={<SignUp />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes >

      </BrowserRouter>


    </div>


  )
}

export default App;
