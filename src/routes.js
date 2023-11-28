import React from "react";
import Login from "./pages/login/login";
import { Routes, Route } from "react-router-dom";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}