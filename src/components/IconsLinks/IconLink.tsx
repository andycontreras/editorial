import React from 'react';
import styles from './iconLink.module.css';

interface TitleProps {
  iconType;
  src;
  alt;
  href: string;
}
export function IconComponent({ iconType, src, alt, href }: TitleProps) {
  return (
    <>
      <div className={styles.icon_container}>
        <a className={styles.refStyle} href={href} target="_blank">
          <img className={styles[iconType]} src={src} alt={alt} />
        </a>
      </div>
    </>
  );
}
