import React from "react";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Productpage from "./pages/Productpage";
import Cartpage from "./pages/Cartpage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import "./stylesheets/layout.css";
import "./stylesheets/product.css";
import "./stylesheets/authentication.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
          
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" exact element={<Loginpage />} />
          <Route path="/register" exact element={<Registerpage />} />
          <Route
            path="/productinfo/:productid"
            exact
            element={<Productpage />}
          />
          <Route path="/cart" exact element={<Cartpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
