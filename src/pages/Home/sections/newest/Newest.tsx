import React from 'react';
import styles from './newest.module.css';
import portada from '@/assets/images/portada.jpg';

import { TitleComponent } from '@/components/Title/Title';
export function NewestSection() {
  return (
    <section className={styles.newest_container} id="newest">
      <div className={styles.flayer_container}>
        <img
          className={styles.flayer}
          src={portada}
          alt="Portada ultimo lanzamiento"
        />
      </div>
      <div className={styles.flayer_info_container}>
        <TitleComponent content="Último Lanzamiento" tittleType="secondary" />
        <div className={styles.flayer_info_buy}>
          <p className={styles.flayer_info_subtitle}>
            Puedes conseguirlo ahora
          </p>
          <div className={styles.flayer_info_button}>
            <a
              className={styles.flayer_buy}
              href="https://www.amazon.com/"
              target="_blank"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
