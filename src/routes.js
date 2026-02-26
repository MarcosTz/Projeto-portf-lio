import React from 'react'; // Import React if not already imported
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Servicos from './pages/Servicos';

import Header from './components/Header'; 


function RoutesApp(){
  return(
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/sobre" element={ <Sobre /> } /> 
        <Route path="/serviços" element={ <Servicos /> } /> 
        <Route path="/contato" element={ <Contato /> } /> 
      
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;
