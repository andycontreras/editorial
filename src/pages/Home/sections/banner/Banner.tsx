import React from 'react';
import styles from './banner.module.css';

export function BannertSection() {
  return (
    <section className={styles.banner_container}>
      <div className={styles.banner_content}>
        <p className={styles.banner_first}>
          EXPLORA, CREA Y DESCUBRE{' '}
          <span className={styles.banner_second}>
            con los libros de actividades infantiles, fuente inagotable de
            alegría y conocimiento.
          </span>
        </p>
      </div>
    </section>
  );
}
