import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Homepage from "./pages/homepage";
import Loginpage from './pages/loginpage';
import Productpage from "./pages/Productpage"
import Productspage from "./pages/productspage";
import Register from "./register";
import Cart from './pages/cart';

function App() {
  return (
    <div >
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/loginpage' element={<Loginpage/>}/>
          <Route path='/Productpage/:id' element={<Productpage/>}/>
          <Route path='/Productspage' element={<Productspage/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

