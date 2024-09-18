"use client";
import React from 'react';
import { useLocation } from 'react-router-dom';

const EventDetail = () => {
    const query = new URLSearchParams(useLocation().search);
    const eventId = query.get('id');

    return (
        <div className="event-detail">
            <img src="event-detail-image.jpg" alt="Evento Detalle" />
            <h2>Título del Evento: {eventId}</h2>
            <p>Fecha: 20 de Septiembre</p>
            <p>Descripción detallada del evento...</p>
            <button>Inscribirse</button>
        </div>
    );
};

export default EventDetail;
