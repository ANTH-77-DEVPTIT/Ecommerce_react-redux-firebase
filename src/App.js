import React from 'react'
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'
import Registerpage from './pages/Registerpage'
import Productpage from './pages/Productpage'
import Cartpage from './pages/Cartpage'
import { Route, BrowserRouter, Routes } from "react-router-dom"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/login" element={<Loginpage />}/>
          <Route path="/register" element={<Registerpage/>}/>
          <Route  path="/productinfo" element={<Productpage/>} />
          <Route path="/cart" element={<Cartpage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App