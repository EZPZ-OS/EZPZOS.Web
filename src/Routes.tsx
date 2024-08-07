import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QRScannerPage from "./pages/QR/QRScannerPage";
import Menu from "./pages/Menu/Menu";
import { DafaultMenuRoutesValues } from "ezpzos.core";
import Profile from "./pages/Profile/Profile";
import Kitchen from "./pages/Kitchen/Kitchen";
import LoginSignupPage from "./Pages/LoginOrSignup/LoginOrSignup";
import OTPPage from "./pages/OTPPage/OTPPage";
import BusinessHome from "./Pages/Kitchen/BuisnessHome";
const AppRoutes: React.FC = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="signup" element={<LoginSignupPage  isLogin={false}  />} />
		<Route path="login" element={<LoginSignupPage isLogin={true} />} />
		<Route path="otp" element={<OTPPage />} />

		<Route path="scan" element={<QRScannerPage />} />
		<Route path={DafaultMenuRoutesValues.DineInRouteDefaultValue} element={<Menu />} />
		<Route path={DafaultMenuRoutesValues.TakeAwayRouteDefaultValue} element={<Menu />} />
		<Route path="profile" element={<Profile />} />

		{/* Business Routes */}
		<Route path="businesshome" element={<BusinessHome />} />
		
	</Routes>
);

export default AppRoutes;
