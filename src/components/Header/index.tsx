import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { IconComponent } from '../IconsLinks/IconLink';

export function Header() {
  useEffect(() => {
    const cancelButton = document.getElementById('cancel');
    const burgerButton = document.getElementById('burger_menu');
    const navMenu = document.getElementById('menu_nav');
    const menuLink = document.querySelectorAll('#burger_link');

    menuLink.forEach((link) => {
      link.addEventListener('click', (e) => {
        setTimeout(() => {
          navMenu.style.display = 'none';
          navMenu.style.flex = '0';
        }, 100);
      });
    });

    cancelButton.addEventListener('click', (e) => {
      e.preventDefault();
      navMenu.style.display = 'none';
      navMenu.style.flex = '0';
    });
    burgerButton.addEventListener('click', (e) => {
      e.preventDefault();
      navMenu.style.display = 'flex';
    });
  }, []);
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

        <div className={styles.burger_container} id="burger_menu">
          <ul className={styles.burger}>
            <li className={styles.burger_line}></li>
            <li className={styles.burger_line}></li>
            <li className={styles.burger_line}></li>
          </ul>
        </div>

        <div className={styles.phone_menu} id="menu_nav">
          <div className={styles.cancel_menu} id="cancel">
            X
          </div>
          <a className={styles.menu_link} id="burger_link" href="#about">
            Nosotros
          </a>
          <a className={styles.menu_link} id="burger_link" href="#inventory">
            Catálogo
          </a>
          <a className={styles.menu_link} id="burger_link" href="#newsletter">
            Suscribirse
          </a>
        </div>

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
