import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Produtos1 from './Produtos1/Produtos1';
import Produtos2 from './Produtos2/produtos2';
import Produtos3 from './Produtos3/Produtos3';

function App() {
  return (
    <div>   
       <BrowserRouter> 
        <Routes>
          <Route path="/Produtos1" element={<Produtos1 />} />
          <Route path="/Produtos2" element={<Produtos2 />} />
          <Route path="/Produtos3" element={<Produtos3 />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
