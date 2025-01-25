import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout } from '@/layouts/mainLayout/MainLayout';
import { Home } from '@/pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
