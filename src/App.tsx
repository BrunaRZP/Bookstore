import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
// import NavbarNavigatio from './Navbar/NavbarNavigatio';
import './App.css';

function App() {
  return (
    <div>   
       <BrowserRouter> 
        <Routes>
          {/* <NavbarNavigatio /> */}
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
