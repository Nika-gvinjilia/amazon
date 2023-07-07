import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Homepage from "./pages/homepage";
import Loginpage from './pages/loginpage';
import Productpage from "./pages/Productpage";
import Productspage from "./pages/productspage";

function App() {
  return (
    <div >
        <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path='/loginpage' element={<Loginpage/>}/>
          <Route path='/Productpage' element={<Productpage/>}/>
          <Route path='/Productspage' element={<Productspage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
