import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu/Menu";
import SignupPage from "./Pages/signup/SignupPage";
import OptPage from "./Pages/OptPage/OptPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="signup" element={<SignupPage />} />
    <Route path="menu" element={<Menu />} />
      <Route path="opt" element={<OptPage />} />
  </Routes>
);

export default AppRoutes;
