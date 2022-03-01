import React from 'react'
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'
import Registerpage from './pages/Registerpage'
import Productpage from './pages/Productpage'
import Cartpage from './pages/Cartpage'
import { Route, BrowserRouter, Routes } from "react-router-dom"

import "./stylesheets/layout.css"
import "./stylesheets/product.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/login" exact element={<Loginpage />}/>
          <Route path="/register" exact element={<Registerpage/>}/>
          <Route path="/productinfo/:productid" exact element={<Productpage/>} />
          <Route path="/cart" exact element={<Cartpage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App