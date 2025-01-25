import React from 'react';
import styles from './newsletter.module.css';
import boyImage from '@/assets/images/kid-reading.jpg';

import { TitleComponent } from '@/components/Title/Title';
export function NewsletterSection() {
  return (
    <section className={styles.newsletter_container} id="newsletter">
      <div className={styles.form_image_container}>
        <img className={styles.form_image} src={boyImage} alt="Form image" />
      </div>
      <div className={styles.form_container}>
        <div className={styles.form_title_container}>
          <p className={styles.form_title}>
            Suscribete a nuestro boletin informatico
          </p>
        </div>
        <p className={styles.form_subtitle}>
          ¡Enterate de nuestros nuevos lanzamientos y ofertas!
        </p>
        <form className={styles.form_newsletter} action="send">
          <input
            className={styles.input_form}
            type="name"
            name="name"
            id=""
            placeholder="Nombre"
          />
          <input
            className={styles.input_form}
            type="surname"
            name="apellido"
            id=""
            placeholder="Apellido"
          />
          <input
            className={styles.input_form}
            type="email"
            name="email"
            id=""
            placeholder="Email"
          />
          <label>
            <input
              className={styles.check_input}
              type="checkbox"
              id="checkbox"
              value="check_terms"
            />
            Sí, suscribirme a este boletín informativo
          </label>
          <input
            className={styles.button_form}
            type="button"
            value="suscribirme"
          />
        </form>
      </div>
    </section>
  );
}
