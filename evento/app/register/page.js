"use client"
import { useState } from 'react';


export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            setMessage('Registro exitoso');
            // Redirigir o guardar el token según tu flujo de trabajo
        } else {
            setMessage(data.checkIn || 'Error en el registro');
        }
    };

    return (
        <div>
            <h1>Registrarse</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
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
                <button type="submit">Registrarse</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
