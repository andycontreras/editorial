import React from 'react';
import styles from './Header.module.css';
import { IconComponent } from '../IconsLinks/IconLink';

export function Header() {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <img
            className={styles.img_header}
            src="/logo-octopodo.png"
            alt="Octopodo Editorial"
          />
        </div>
        <nav className={styles.nav_header}>
          <ul className={styles.nav_ul}>
            <li className={styles.nav_li}>
              <a className={styles.nav_link} href="#about">
                Nosotros
              </a>
            </li>
            <li className={styles.nav_li}>
              <a className={styles.nav_link} href="#inventory">
                Catálogo
              </a>
            </li>
            <li className={styles.nav_li}>
              <a className={styles.nav_link} href="#newsletter">
                Suscribirse
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.rrss_container}>
          <IconComponent
            src="https://img.icons8.com/?size=100&id=31761&format=png&color=000000"
            alt="Amazon"
            iconType="headerIcon"
            href="https://www.amazon.com/"
          />
          <IconComponent
            src="https://img.icons8.com/?size=100&id=1481&format=png&color=000000"
            alt="Pinterest"
            iconType="headerIcon"
            href="https://ar.pinterest.com/octopodostudio/"
          />
        </div>
      </div>
    </>
  );
}
