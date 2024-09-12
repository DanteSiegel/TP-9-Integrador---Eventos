
"use client";
import styles from './page.module.css'
import Link from 'next/link';
export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Bienvenido</h1>
            <p>Elija una opción:</p>
            <div className={styles.buttons}>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            </div>
        </div>
    );
}