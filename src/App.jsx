import React from 'react';
import './App.css';
import Home from './pages/Home';
import Carrito from './pages/Carrito';
import { Route, Routes, Link } from 'react-router-dom';
import DetallePizza from './pages/DetallePizza';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/carrito">Carrito</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/detallepizza/:id" element={<DetallePizza />} />
      </Routes>
    </>
  );
}

export default App;




