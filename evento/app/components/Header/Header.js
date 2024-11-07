// components/Header.js
"use client";

import Link from 'next/link';
import { useUser } from '../../Context/UserContext';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { user, setUser } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
    router.push('/'); // Redirigir al home al cerrar sesión
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
            <>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/register">Registrarse</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
