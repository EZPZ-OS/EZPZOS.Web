import React from "react";
import { Routes, Route } from "react-router-dom";
import OptPage from "./pages/OptPage/OptPage";
import Home from "./pages/Home";
import QRScannerPage from "./pages/QR/QRScannerPage";
import Menu from "./pages/Menu/Menu";
import SignupPage from "./pages/SignUp/SignupPage";
import { DafaultMenuRoutesValues } from "../src/Common/Constants";
import Profile from './pages/Profile/Profile';
import Kitchen from './pages/Kitchen/Kitchen';



const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
      <Route path="opt" element={<OptPage />} />
    <Route path="signup" element={<SignupPage />} />
    <Route path="scan" element={<QRScannerPage />} />
    <Route
      path={DafaultMenuRoutesValues.DineInRouteDefaultValue}
      element={<Menu />}
    />
    <Route
      path={DafaultMenuRoutesValues.TakeAwayRouteDefaultValue}
      element={<Menu />}
    />
    <Route path="profile" element={<Profile />} />
    <Route path="kitchen" element={<Kitchen />} />
    
  </Routes>
);

export default AppRoutes;
