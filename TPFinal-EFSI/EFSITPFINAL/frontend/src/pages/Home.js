import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import EventList from '@/app/components/EventList';
import { AuthContext } from '@/app/context/AuthContext';

const Home = () => {
  const { token, username } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');

    if (storedToken) {
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && !token) {
      router.push('/Login');
    }
  }, [loading, token, router]);

  

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Bienvenido a la Home</h1>
      {username && <h2>Hola, {username}!</h2>}
      <EventList />
      
      <Footer />
    </div>
  );
};

export default Home;
