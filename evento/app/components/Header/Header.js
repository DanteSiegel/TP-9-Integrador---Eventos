// components/Header.js
"use client"; // Asegúrate de tener esto al principio
import Link from 'next/link';
import { useUser } from '../../Context/UserContext'; // Asegúrate de que esta ruta sea correcta
const Header = () => {
    const { user, setUser } = useUser(); // Obtén el estado del usuario y la función para actualizarlo
  
    const handleLogout = () => {
      setUser(null); // Restablece el usuario en el contexto
    };
  
    return (
      <header className="header">
        <div className="logo">
          <Link href="/">Eventos</Link>
        </div>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contacto</Link></li>
            {user ? (
              <li className="user-info">
                <span>{user.name}</span>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li><Link href="/login">Login</Link></li>
            )}
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;