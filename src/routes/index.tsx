import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home/index';
import HomeChatbot from '../pages/homeChatbot';
import Login from '../pages/login/index';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home-chatbot" element={<HomeChatbot />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
