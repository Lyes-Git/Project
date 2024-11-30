import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoginSingnUp from './Pages/LoginSingnUp'
import Footer from "./Components/Footer/Footer";
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from'./Pages/Product'
import Cart from './Pages/Cart'


function App() {
  const [count, setCount] = useState(0)
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    alert(`Language changed to: ${selectedLanguage === "en" ? "English" : "French"}`);
    
  };

  return ( 
       
      <div className="app-container">
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
          <Route path='/login' element={<LoginSingnUp/>}/>
       </Routes >
       <Footer />
        </BrowserRouter>
      
        
        <div className="App">
      <header className="App-header">
        <div className="language-selector">
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </div>
        </header>
      </div>
      </div>
    
  
  );
}

export default App;
