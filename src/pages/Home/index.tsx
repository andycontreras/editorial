import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseVisibleSection } from '@/hooks/useVisibleSection';

import styles from './home.module.css';
import { HeroSection } from './sections/hero/hero';
import { AboutSection } from './sections/about/About';
import { NewestSection } from './sections/newest/Newest';
import { BannertSection } from './sections/banner/Banner';
import { InventorySection } from './sections/inventory/Inventory';
import { NewsletterSection } from './sections/newsletter/Newsletter';

export function Home() {
  const navigate = useNavigate();
  const sectionID = ['hero', 'about', 'newest', 'inventory', 'newsletter'];
  const visibleSection = UseVisibleSection(sectionID);

  useEffect(() => {
    if (visibleSection) {
      navigate(`#${visibleSection}`, { replace: true });
    }
  }, [visibleSection, navigate]);
  return (
    <div className={styles.home_container}>
      <HeroSection />
      <AboutSection />
      <BannertSection />
      <NewestSection />
      <InventorySection />
      <NewsletterSection />
    </div>
  );
}
