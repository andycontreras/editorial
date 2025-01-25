import React from 'react';

import styles from './section.module.css';
import { Home } from '@/pages/Home';
import { Lastest } from '@/pages/Lastest';
import { About } from '@/pages/About';

function Sections() {
  return (
    <>
      <section className={styles.sectionComponent} id="home">
        <Home />
      </section>
      <section className={styles.sectionComponent} id="about">
        <About />
      </section>
      <section className={styles.sectionComponent} id="lastes">
        <Lastest />
      </section>
    </>
  );
}

export default Sections;
