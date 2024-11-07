// pages/login.js
"use client";

import Link from 'next/link';
import { useUser } from '../Context/UserContext';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { setUser } = useUser();
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Obtener usuario registrado desde Local Storage
    const registeredUser = JSON.parse(localStorage.getItem('user'));

    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      setUser(registeredUser); // Guardar usuario en contexto
      router.push('/'); // Redirigir a la página de eventos
    } else {
      alert("Usuario no registrado o credenciales incorrectas. Por favor, regístrate.");
    }
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
