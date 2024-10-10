"use client";
import styles from './page.module.css'; 

export default function Home() {

  const events = [
    {
      id: 1,
      name: 'Concierto de Rock',
      description: 'Un gran concierto de rock en la ciudad.',
      date: '2024-11-15',
    },
    {
      id: 2,
      name: 'Feria de Tecnologíaa',
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

  return (
    <div>
      <h1>Eventos Disponibles</h1>
      <ul>
        {/* Mapeo de la lista de eventos para mostrarlos */}
        {events.map(event => (
          <li key={event.id} className={styles.eventItem}>
            <h2 className={styles.eventTitle}>{event.name}</h2>
            <p className={styles.eventDescription}>{event.description}</p>
            <p className={styles.eventDate}>
              <strong>Fecha:</strong> {new Date(event.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
