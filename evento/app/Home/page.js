"use client";

import React from 'react';
import EventCard from '../components/EventCard';

const Home = () => {
    const events = [
        { id: 1, title: 'Evento 1', date: '20 de Septiembre', image: 'event1.jpg' },
        { id: 2, title: 'Evento 2', date: '25 de Septiembre', image: 'event2.jpg' },
    ];

    return (
        <div className="event-list">
            <h2>Eventos</h2>
            {events.map(event => (
                <EventCard key={event.id} title={event.title} date={event.date} image={event.image} />
            ))}
        </div>
    );
};

export default Home;
