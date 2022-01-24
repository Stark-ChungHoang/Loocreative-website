import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contanct";
import Home from "../pages/Home/index";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default router;
