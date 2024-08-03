import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QRScannerPage from "./pages/QR/QRScannerPage";
import Menu from "./pages/Menu/Menu";
import { DafaultMenuRoutesValues } from "ezpzos.core";
import Profile from "./pages/Profile/Profile";
import Kitchen from "./pages/Kitchen/Kitchen";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/signup/SignupPage";

const AppRoutes: React.FC = () => (
	<Routes>
		{/* Client Routes */}
		<Route path="/" element={<Home />} />
		<Route path="signup" element={<SignUpPage />} />
		<Route path="scan" element={<QRScannerPage />} />
		<Route path={DafaultMenuRoutesValues.DineInRouteDefaultValue} element={<Menu />} />
		<Route path={DafaultMenuRoutesValues.TakeAwayRouteDefaultValue} element={<Menu />} />
		<Route path="profile" element={<Profile />} />

		{/* Business Routes */}
		<Route path="kitchen" element={<Kitchen />} />
	</Routes>
);

export default AppRoutes;
