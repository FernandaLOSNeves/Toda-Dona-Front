import React from 'react'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Contato from './paginas/contato/Contato'
import './App.css'
import CadastroVendedora from './paginas/cadastroVendedora/CadastroVendedora'
import CadastrarCategoria from './components/categoria/cadastrarCategoria/CadastrarCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria'
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos'
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import store from './store/store'
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto'
import Home2 from './paginas/home/Home2'
import ListaProdutosHome from './components/produtos/listaprodutos/ListaProdutosHome'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ModalLogin from './components/produtos/modalLogin/ModalLogin'
import FaleConosco from './paginas/faleConosco/FaleConosco'
import SobreNos from './paginas/SobreNos/SobreNos'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/faleconosco" element={<FaleConosco />} />
          <Route path="/cadastro" element={<CadastroVendedora />} />
          <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/produtoscliente" element={<ListaProdutosHome />} />
          <Route path='/deletarProduto/:id' element={<DeletarProduto />} />
          <Route path="/formularioProduto" element={<CadastroProduto />} />
          <Route path="/formularioProduto/:id" element={<CadastroProduto />} />
          <Route path="/cadastrarCategoria" element={<CadastrarCategoria />} />
          <Route path="/cadastrarCategoria/:id" element={<CadastrarCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
          <Route path='/sobrenos' element={<SobreNos />}/>
          </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  )
}
export default App
