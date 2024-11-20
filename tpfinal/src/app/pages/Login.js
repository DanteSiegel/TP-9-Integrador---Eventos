'use client'; // Esto asegura que el componente funcione en el cliente

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // IMPORTANTE: Usa el nuevo hook para rutas en la carpeta `app`
import axios from 'axios';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Hook de navegación

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/home'); // Redirige si ya está autenticado
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3508/api/user/login', {
        username,
        password,
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', username);
        router.push('/home'); // Redirige después del login
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Ocurrió un error al intentar iniciar sesión.');
    }
  };

  return (
    <div >
      <form onSubmit={handleLogin} >
        <label>Nombre de Usuario:</label>
        <div >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <label>Contraseña:</label>
        <div >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" >Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
