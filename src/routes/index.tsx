import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home/index';
import Login from '../pages/login/index';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
