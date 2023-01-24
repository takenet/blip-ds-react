import React from "react";
import { Route, Routes } from "react-router-dom";

import ComponentList from "./pages/componentList";
import Accordion from "./components/accordion/Accordion";
import Alert from "./components/alert/alert";
import Autocomplete from "./components/autocomplete/autocomplete";
import Avatar from "./components/avatar/avatar";
import Banner from "./components/banner/banner";
import Input from "./components/input/input";
import Button from "./components/button/button";
import ButtonIcon from "./components/buttonIcon/buttonIcon";

function ComponentRoutes() {
  return (
      <Routes>
        <Route path="/" element={<ComponentList />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/autocomplete" element={<Autocomplete />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/input" element={<Input />} />
        <Route path="/button" element={<Button />} />
        <Route path="/button-icon" element={<ButtonIcon />} />
      </Routes>
  );
};

export default ComponentRoutes;
