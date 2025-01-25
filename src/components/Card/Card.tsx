import React from 'react';
import styles from './card.module.css';

interface TitleProps {
  bookId;
  src;
  alt: string;
}
export function CardComponent({ bookId, src, alt }: TitleProps) {
  return (
    <>
      <div className={styles.card_container} id={bookId}>
        <img className={styles.card_image} src={src} alt={alt} />
      </div>
    </>
  );
}
