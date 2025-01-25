import React from 'react';

import styles from './mainLayout.module.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <>
      <div className={styles.mainLayout_container}>
        <Header />
        <main className={styles.main_container}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
