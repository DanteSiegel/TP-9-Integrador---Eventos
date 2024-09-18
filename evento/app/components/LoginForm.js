"use client";
import React from 'react';

const LoginForm = () => {
    return (
        <div className="login-form">
            <h2>Iniciar Sesión</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Login</button>
            <p>No tienes cuenta? <a href="/register">Registrarse</a></p>
        </div>
    );
};

export default LoginForm;
