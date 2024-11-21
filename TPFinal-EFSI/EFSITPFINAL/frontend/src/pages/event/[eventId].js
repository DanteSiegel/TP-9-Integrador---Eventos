import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AuthContext } from '../../app/context/AuthContext';
import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/Footer';
import styles from '../../styles/EventDetail.module.css';

const EventDetail = () => {
  const { token } = useContext(AuthContext);  // Usamos el token desde el contexto
  const router = useRouter();
  const { eventId } = router.query;
  const [eventDetail, setEventDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificamos el token al montar el componente
    const storedToken = localStorage.getItem('token');
    
    if (!storedToken) {
      // Si no hay token, redirigimos a login
      router.push('/Login');
    } else {
      // Si hay un token, lo establecemos en el contexto
      // Aquí deberías asegurarte de que tu AuthContext maneje correctamente el token
    }

    setLoading(false);  // Ya no está cargando
  }, [router]);

  useEffect(() => {
    if (loading) return;  // Si todavía está cargando, no hacer nada

    // Si no hay token, ya hemos redirigido, no necesitamos hacer nada más
    if (!token) return; 

    // Si eventId está disponible, hacemos la solicitud para obtener los detalles
    if (eventId) {
      const fetchEventDetail = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/event/${eventId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setEventDetail(response.data);
        } catch (error) {
          console.error('Error fetching event details:', error);
          alert('Error al cargar los detalles del evento');
        }
      };

      fetchEventDetail();
    }
  }, [loading, token, eventId, router]);

  const handleSubscribe = async () => {
    try {
      await axios.post(`http://localhost:5000/api/event/${eventId}/enrollment`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Te has suscrito al evento!');
    } catch (error) {
      console.error('Error subscribing to event:', error);
      alert('Error al suscribirse al evento');
    }
  };

  const handleGoHome = () => {
    router.push('/');
  };

  // Si está cargando o los detalles del evento no están disponibles, mostramos un mensaje
  if (loading || !eventDetail) return <div>Cargando detalles del evento...</div>;

  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>{eventDetail.name}</h1>
      <p className={styles.paragraph}>{eventDetail.description}</p>
      <p className={styles.paragraph}>Precio: {eventDetail.price}</p>
      <p className={styles.paragraph}>Fecha: {new Date(eventDetail.start_date).toLocaleString()}</p>
      <p className={styles.paragraph}>Duración: {eventDetail.duration_in_minutes} minutos</p>
      <p className={styles.paragraph}>Ubicación: {eventDetail.event_location?.name || 'Ubicación no disponible'}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleSubscribe}>Suscribirse</button>
        <button className={styles.buttonSecondary} onClick={handleGoHome}>Volver a Home</button>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail;
