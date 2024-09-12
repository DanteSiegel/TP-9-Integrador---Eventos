"use client"
import { useState } from 'react';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            setMessage('Inicio de sesión exitoso');
            // Redirigir o guardar el token según tu flujo de trabajo
        } else {
            setMessage(data.message || 'Error en el inicio de sesión');
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
