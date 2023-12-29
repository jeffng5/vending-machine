import React from 'react'
import './App.css';
import VendingMachine from "./VendingMachine";
import Nav from "./Nav";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
   
    
    <BrowserRouter>
    <Nav />
    
  
    <Routes>
    
        <Route path="/" element={<VendingMachine/>} />
        <Route path="/candy" element={<Candy/>} />
        <Route path="/chips" element={<Chips/>} />
        <Route path="/soda" element={<Soda/>} />
    </Routes>
    </BrowserRouter>
    

    </div>
    </>
  );
}

export default App;
