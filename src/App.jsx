import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';

// Páginas
import Inicio from './pages/Inicio';
import Produtos from './pages/Produtos';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import OndeComprar from './pages/OndeComprar';
import Contato from './pages/Contato';

function App() {
  return (
    // AQUI ESTÁ O TRUQUE: basename
    // Ele pega automaticamente o valor 'base' que colocamos no vite.config.js
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col bg-inusi-light">
        <Header />

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/a-inusitech" element={<Sobre />} />
            <Route path="/onde-comprar" element={<OndeComprar />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;