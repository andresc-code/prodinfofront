import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import ProductCards from './components/ProductCards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <ProductCards />
      {/* Aquí podrías agregar otros componentes o contenido */}
    </div>
  );
}

export default App;
