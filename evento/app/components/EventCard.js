"use client";
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ title, date, image }) => {
    return (
        <div className="event-card">
            <img src={image} alt="Evento" />
            <h3>{title}</h3>
            <p>Fecha: {date}</p>
            <Link to={`/event-detail?id=${title}`}>Ver más</Link>
        </div>
    );
};

export default EventCard;
