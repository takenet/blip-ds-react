import React from "react";
import { Route, Routes, Router } from "react-router-dom";

import ComponentList from "./pages/componentList";
import Accordion from "./components/accordion/Accordion";

function ComponentRoutes() {
  return (
      <Routes>
        <Route path="/" element={<ComponentList />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
  );
};

export default ComponentRoutes;
