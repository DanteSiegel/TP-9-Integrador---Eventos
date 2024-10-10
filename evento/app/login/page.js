// pages/login.js
"use client";

import Link from 'next/link';
import { useUser } from '.././Context/UserContext'; // Importa el contexto

export default function Login() {
  const { setUser } = useUser(); // Obtén la función para establecer el usuario

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = "Nombre Del Usuario"; // Esto debería ser el nombre del usuario

    // Lógica de autenticación aquí (por ejemplo, llamar a una API)
    setUser({ name, email }); // Establece el usuario en el contexto
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Contraseña:</label>
        <input type="password" name="password" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿No tienes cuenta? <Link href="/register">Regístrate</Link></p>
    </div>
  );
}
