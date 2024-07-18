import React from "react";
import { Routes, Route } from "react-router-dom";
import OptPage from "./pages/OptPage/OptPage";
import Home from "./pages/Home";
import QRScannerPage from "./pages/QR/QRScannerPage";
import Menu from "./pages/Menu/Menu";
import SignUpPage from "./pages/SignUp/SignUpPage";
import { DafaultMenuRoutesValues } from "../src/Common/Constants";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
      <Route path="opt" element={<OptPage />} />
    <Route path="signup" element={<SignUpPage />} />
    <Route path="scan" element={<QRScannerPage />} />
    <Route
      path={DafaultMenuRoutesValues.DineInRouteDefaultValue}
      element={<Menu />}
    />
    <Route
      path={DafaultMenuRoutesValues.TakeAwayRouteDefaultValue}
      element={<Menu />}
    />
  </Routes>
);

export default AppRoutes;
