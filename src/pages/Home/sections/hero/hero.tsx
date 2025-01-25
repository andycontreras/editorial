import React from 'react';
import styles from './hero.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero_container} id="hero">
      <div className={styles.hero_image_container}>
        <div className={styles.hero_title}>
          <h3 className={styles.hero_subtitle}>LIBROS PARA NIÑOS</h3>
          <h1>OCTOPODO EDITORIAL</h1>
          <p className={styles.hero_credits}>EDUCACION | CREATIVIDAD</p>
        </div>
      </div>
    </section>
  );
}
