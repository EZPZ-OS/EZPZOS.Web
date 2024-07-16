import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import QRScannerPage from "./Pages/QR/QRScannerPage";
import Menu from "./Pages/Menu/Menu";
import SignupPage from "./Pages/SignUp/SignUpPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="signup" element={<SignupPage />} />
    <Route path="scan" element={<QRScannerPage />} />
    <Route path="menu" element={<Menu />} />
  </Routes>
);

export default AppRoutes;
