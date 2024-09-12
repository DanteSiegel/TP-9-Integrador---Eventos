// components/LoginForm.js
import { useState } from 'react';

export default function LoginForm({ setMessage }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
        setMessage(data.message);
    };

    return (
        <form onSubmit={handleLogin} style={{ marginBottom: '20px' }}>
            <h2>Iniciar Sesión</h2>
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
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
}
