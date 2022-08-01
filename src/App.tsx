import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './static/navbar/Navbar';
import Footer from './static/footer/Footer';
import Home from './paginas/home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
