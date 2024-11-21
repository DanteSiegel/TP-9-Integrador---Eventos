import styles from '../../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext.js';

const Navbar = () => {
  const router = useRouter();
  const { username, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/Login');
  };

  const handleRedirectToHome = () => {
    router.push('/Home');
  };

  const handleRedirectToContact = () => {
    router.push('/Contacto');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={handleRedirectToHome} style={{ cursor: 'pointer' }}>
        <img src="/logo.png" alt="Logo" className={styles.logoImage} />
        <span style={{ color: 'white' }}>Sitio de los Papus</span>
      </div>
      <div className={styles.userSection}>
        <button
          onClick={handleRedirectToContact}
          style={{
            marginRight: '10px',
            backgroundColor: '#0275D8',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '5px 10px',
          }}
        >
          Contacto
        </button>
        <span>{username || 'Invitado'}</span>
        <button
          onClick={handleLogout}
          style={{
            marginLeft: '10px',
            backgroundColor: '#D9534F',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '5px 10px',
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
