"use client";

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Logo del Sitio</div>
            <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Contact">Contacto</Link></li>
                <li className="user-info">
                    <span>Nombre de Usuario</span>
                    <Link href="/Profile"><i className="user-icon"></i></Link>
                    <Link href="/Logout">Cerrar sesión</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
