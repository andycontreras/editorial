import React from 'react';

import styles from './footer.module.css';
import { TitleComponent } from '../Title/Title';
import { IconComponent } from '../IconsLinks/IconLink';

export function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_info}>
        <TitleComponent
          color="blue"
          content="Valoramos enormemente tu opinión"
          tittleType="secondary"
        />
        <p className={styles.footer_leyend}>
          Al adquirir tus libros, te invitamos coordialmente a dejarnos una
          reseña en Amazon, ya que nos ayudará a crecer. ¡Gracias por tu apoyo!
        </p>
        <p className={styles.footer_registration}>© 2023 Octópodo Editorial</p>
      </div>
      <div className={styles.footer_rrss}>
        <IconComponent
          iconType="footerIcon"
          src="https://img.icons8.com/?size=100&id=1481&format=png&color=f2f2f2"
          alt="Pinterest"
          href="https://ar.pinterest.com/octopodostudio/"
        />
        <IconComponent
          iconType="footerIcon"
          src="https://img.icons8.com/?size=100&id=32292&format=png&color=f2f2f2"
          alt="Instagram"
          href="https://www.instagram.com/"
        />
      </div>
    </div>
  );
}
