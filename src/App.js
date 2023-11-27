import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu';
import ProductCards from './components/ProductCards';
import Navbar from './components/Navbar';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticación (por ejemplo, validar credenciales)
    // Si la autenticación es exitosa, establece el estado como autenticado
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Lógica de cierre de sesión
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <Navbar />
          <Menu onLogout={handleLogout} />
          <ProductCards />
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

