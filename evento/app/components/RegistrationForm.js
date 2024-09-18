"use client";
import React from 'react';

const RegistrationForm = () => {
    return (
        <div className="registration-form">
            <h2>Registrarse</h2>
            <input type="text" placeholder="Nombre" required />
            <input type="text" placeholder="Apellido" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Contraseña" required />
            <input type="password" placeholder="Confirmar contraseña" required />
            <button type="submit">Registrarse</button>
            <p>Ya tienes cuenta? <a href="/login">Iniciar Sesión</a></p>
        </div>
    );
};

export default RegistrationForm;
