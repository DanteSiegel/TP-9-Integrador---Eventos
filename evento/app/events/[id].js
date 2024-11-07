// pages/events/[id].js
"use client";
import { useRouter } from 'next/router';
import styles from './EventDetail.module.css'; // Crear un archivo CSS opcional para estilos

// Datos de eventos de ejemplo, en un entorno real estos vendrían de una API
const events = [
  {
    id: 1,
    name: 'Concierto de Rock',
    description: 'Un gran concierto de rock en la ciudad.',
    date: '2024-11-15',
  },
  {
    id: 2,
    name: 'Feria de Tecnología',
    description: 'Explora las últimas innovaciones tecnológicas.',
    date: '2024-12-01',
  },
  {
    id: 3,
    name: 'Exposición de Arte',
    description: 'Una exposición de los mejores artistas contemporáneos.',
    date: '2024-10-25',
  },
];

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Buscar el evento por ID
  const event = events.find(event => event.id === parseInt(id));

  // Mostrar un mensaje si el evento no existe
  if (!event) {
    return <p>Evento no encontrado.</p>;
  }

  return (
    <div className={styles.eventDetail}>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>
        <strong>Fecha:</strong> {new Date(event.date).toLocaleDateString()}
      </p>
      <button onClick={() => router.push('/')}>Volver a eventos</button>
    </div>
  );
}
