// components/RegisterForm.js
import { useState } from 'react';

export default function RegisterForm({ setMessage }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, username, password }),
        });
        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <form onSubmit={handleRegister} style={{ marginBottom: '20px' }}>
            <h2>Registrarse</h2>
            <input
                type="text"
                placeholder="Nombre"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                style={{ display: 'block', margin: '10px 0' }}
            />
            <input
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                style={{ display: 'block', margin: '10px 0' }}
            />
            <input
                type="email"
                placeholder="Correo electrónico"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ display: 'block', margin: '10px 0' }}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ display: 'block', margin: '10px 0' }}
            />
            <button type="submit">Registrarse</button>
        </form>
    );
}
