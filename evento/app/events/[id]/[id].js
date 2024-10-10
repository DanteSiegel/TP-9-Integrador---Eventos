// pages/events/[id].js
import { useRouter } from 'next/router';

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="event-detail-page">
      <h1>Detalle del Evento {id}</h1>
      <p>Descripción del evento.</p>
    </div>
  );
}
