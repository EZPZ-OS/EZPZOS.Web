import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/SignUp/SignupPage";
import QRScannerPage from "./pages/QR/QRScannerPage";
import Menu from "./pages/Menu/Menu";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="signup" element={<SignupPage />} />
    <Route path="scan" element={<QRScannerPage />} />
    <Route path="menu" element={<Menu />} />
  </Routes>
);

export default AppRoutes;
