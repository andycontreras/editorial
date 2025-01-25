import React from 'react';
import styles from './title.module.css';

interface TitleProps {
  color?;
  content: string;
  tittleType: 'main' | 'secondary' | 'three';
}
export function TitleComponent({ color, content, tittleType }: TitleProps) {
  return (
    <>
      <div className={styles.title_container}>
        <p
          className={`${styles.title_style} ${styles[color]} ${styles[tittleType]}`}
        >
          {content}
        </p>
      </div>
    </>
  );
}
