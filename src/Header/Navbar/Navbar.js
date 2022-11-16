import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from 'semantic-ui-react';
import Login from '../LOGIN/Login';



const Navbar = () => {
  return (
    <div>
      
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
         
          <Route path="Header" element={<Header />} />
          <Route path="Login" element={<Login />} />
          {/* <Route path="Purchase" element={<Purchase />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>



    </div>
  )
}

export default Navbar
