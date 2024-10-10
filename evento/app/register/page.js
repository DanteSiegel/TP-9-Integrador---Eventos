// pages/register.js

"use client;"
import Link from 'next/link';
import { useUser } from '.././Context/UserContext'; // Importa el contexto




export default function Register() {
  const { setUser } = useUser(); // Obtén la función para establecer el usuario

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Lógica de registro aquí (por ejemplo, llamar a una API)
    setUser({ name, email }); // Establece el usuario en el contexto
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
