import React from 'react';
import styles from './about.module.css';
import momDaugther from '@/assets/images/mom-daugther.jpg';
import { TitleComponent } from '@/components/Title/Title';

export function AboutSection() {
  return (
    <section className={styles.about_container} id="about">
      <div className={styles.about_description}>
        <TitleComponent
          color="blue"
          tittleType="main"
          content="Somos creadores apasionados de libros para niños"
        />
        <p className={styles.description_content}>
          Nuestro objetivo es acompañarlos en su desarrollo y crecimiento,
          fomentando amor por la lectura y el aprendizaje. Cada uno de nustros
          libros están diseñados con amor y cuidado, llenos de actividades
          lúdicas y divertidas que estimulan su imaginación y creatividad.
          descubre nuestras emocionantes colecciones y únete a nosotros en este
          maravilloso viaje de descubrimiento y aprendizaje junto a tus hijos.
        </p>
      </div>
      <div className={styles.about_image_container}>
        <img
          className={styles.about_image}
          src={momDaugther}
          alt="Mom & dauther image"
        />
      </div>
    </section>
  );
}
