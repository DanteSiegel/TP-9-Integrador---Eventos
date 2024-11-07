// pages/register.js
"use client";

import Link from 'next/link';
import { useUser } from '../Context/UserContext';
import { useRouter } from 'next/navigation';

export default function Register() {
  const { setUser } = useUser();
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Guardar usuario en Local Storage
    const userData = { name, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData); // Guardar usuario en contexto
    router.push('/'); // Redirigir a la página de eventos
  };

  return (
    <div className="register-page">
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
        <label>Nombre:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Contraseña:</label>
        <input type="password" name="password" required />
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link></p>
    </div>
  );
}
