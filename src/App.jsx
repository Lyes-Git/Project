import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

// import Shop from './Pages/Shop'
// import ShopCategory from './Pages/ShopCategory'
//import Product from'./Pages/Product'

function App() {
  const [count, setCount] = useState(0)

  return ( 
       
      <div>
        <BrowserRouter>
        <Navbar/>
       <Routes>
        {/* <Route path='/' element={<Shop/>}/>
        <Route path='/rings' element={<ShopCategory categoty='ring'/>} />
        <Route path='/neclaces' element={<ShopCategory categoty='neclace'/>}/>
        <Route path='/earings' element={<ShopCategory categoty='earing'/>}/>
        <Route path='bracelets/' element={<ShopCategory categoty='bracelet'/>}/>
        <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/> */}
       </Routes >

        </BrowserRouter>
        
        
      </div>
    
  
  )
}

export default App
