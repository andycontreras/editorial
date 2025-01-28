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
  {
    src: cardImage,
    alt: 'Aprender a escribir en cursiva',
    bookId: 'b2',
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
      <div className={styles.inventoryList_container}>
        <a className={styles.inevntoryList_link} href="#">
          Ver más
        </a>
      </div>
    </section>
  );
}
