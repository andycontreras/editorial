import React from 'react';
import styles from './inventory.module.css';
import cardImage from '@/assets/images/portada.jpg';

import { TitleComponent } from '@/components/Title/Title';
import { CardComponent } from '@/components/Card/Card';

const booksList = [
  {
    src: cardImage,
    alt: 'Aprender a escribir en cursiva',
    bookId: 'b1',
  },
];
export function InventorySection() {
  return (
    <section className={styles.inventory_container} id="inventory">
      <TitleComponent
        tittleType="three"
        color="blue"
        content="Nuestro catálogo"
      />

      <div className={styles.bookgrid_container}>
        {booksList.map((data) => (
          <CardComponent
            key={data.bookId}
            bookId={data.bookId}
            src={data.src}
            alt={data.alt}
          />
        ))}
      </div>
      <div className={styles.booklist_container}>
        <a className={styles.booklist_goto} href="#">
          Ver más
        </a>
      </div>
    </section>
  );
}
