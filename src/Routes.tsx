import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QRScannerPage from "./pages/QR/QRScannerPage";
import Menu from "./pages/Menu/Menu";
import { DafaultMenuRoutesValues } from "ezpzos.core";
import Profile from "./pages/Profile/Profile";
import Kitchen from "./pages/Kitchen/Kitchen";
import SignUpPage from "./pages/SignUpFix/SignUpPageFix";
import OTPPage from "./pages/OTPPage/OTPPage";

const AppRoutes: React.FC = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="signup" element={<SignUpPage />} />
		<Route path="otp" element={<OTPPage />} />
		<Route path="scan" element={<QRScannerPage />} />
		<Route path={DafaultMenuRoutesValues.DineInRouteDefaultValue} element={<Menu />} />
		<Route path={DafaultMenuRoutesValues.TakeAwayRouteDefaultValue} element={<Menu />} />
		<Route path="profile" element={<Profile />} />
		<Route path="kitchen" element={<Kitchen />} />
	</Routes>
);

export default AppRoutes;
