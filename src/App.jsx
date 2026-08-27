import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Inicio from './pages/Inicio';
import Produtos from './pages/Produtos';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import OndeComprar from './pages/OndeComprar';
import Contato from './pages/Contato';
import Privacidade from './pages/Privacidade';
import TermosDeUso from './pages/TermosDeUso';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col bg-inusi-light">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:slug" element={<ProdutoDetalhe />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/a-inusitech" element={<Sobre />} />
            <Route path="/onde-comprar" element={<OndeComprar />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;