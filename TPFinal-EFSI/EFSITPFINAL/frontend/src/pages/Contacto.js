// contacto.js
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import styles from '../styles/Contacto.module.css';

const Contacto = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>Contacto</h1>
      <p className={styles.subtitle}>
        Si tienes alguna consulta o inquietud, no dudes en comunicarte con nosotros.
      </p>

      <div className={styles.contactInfo}>
        <h2 className={styles.subtitle}>Información de Contacto</h2>
        <ul>
          <li><strong>Email:</strong> contacto@sitiodelospapus.com</li>
          <li><strong>Teléfono:</strong> +1 234 567 890</li>
          <li><strong>Dirección:</strong> Calle De Pia 123, Ciudad Papu</li>
        </ul>
      </div>

      <div className={styles.formContainer}>
        <h2 className={styles.subtitle}>Envíanos un Mensaje</h2>
        <form className={styles.form}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" placeholder="Tu nombre" className={styles.input} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Tu correo electrónico" className={styles.input} required />

          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" placeholder="Tu mensaje" className={styles.input} required></textarea>

          <button type="submit" className={styles.submitButton}>Enviar</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contacto;
