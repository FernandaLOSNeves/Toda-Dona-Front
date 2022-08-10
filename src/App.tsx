import React from 'react';
import logo from './logo.svg';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Contato from './paginas/contato/Contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CadastroVendedora from './paginas/cadastroVendedora/CadastroVendedora';

function App() {
  return (
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<CadastroVendedora />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  );
}
export default App;
