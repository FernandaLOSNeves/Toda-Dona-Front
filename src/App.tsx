import React from 'react'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Contato from './paginas/contato/Contato'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CadastroVendedora from './paginas/cadastroVendedora/CadastroVendedora'
import CadastrarCategoria from './components/categoria/cadastrarCategoria/CadastrarCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria'

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
          <Route path="/categorias" element={<ListaCategoria />} />
          {/* <Route path="/posts" element={<ListaPostagem />} /> */}
          {/* <Route path="/formularioPostagem" element={<CadastroPost />} /> */}
          <Route path="/cadastrarCategoria" element={<CadastrarCategoria />} />
          <Route
            path="/cadastrarCategoria/:id"
            element={<CadastrarCategoria />}
          />
          {/* <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />  */}
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
export default App
