import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QRScannerPage from "./pages/QR/QRScannerPage";
import Menu from "./pages/Menu/Menu";
import { DafaultMenuRoutesValues } from "ezpzos.core";
import Profile from "./pages/Profile/Profile";
import Kitchen from "./pages/Kitchen/Kitchen";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/SignUp/SignupPage";

const AppRoutes: React.FC = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="signup" element={<LoginSignupPage isLogin={false} />} />
		<Route path="login" element={<LoginSignupPage isLogin={true} />} />
		<Route path="otp" element={<OTPPage />} />

		<Route path="scan" element={<QRScannerPage />} />
		<Route path={DefaultMenuRoutesValues.DineInRouteDefaultValue} element={<Menu />} />
		<Route path={DefaultMenuRoutesValues.TakeAwayRouteDefaultValue} element={<Menu />} />
		<Route path="profile" element={<Profile />} />
		<Route path="pastorder" element={<PastOrder />} />

		{/* Business Routes */}
		<Route path="businesshome" element={<BusinessHome BusinessHomePageValues={{ IsLoggedIn: true, HomePageButtonList: [], NotificationList: [] }} />} />
		<Route path="menucreate" element={<MenuCreate />} />


	</Routes>
);

export default AppRoutes;
