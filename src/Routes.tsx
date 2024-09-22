import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QRScannerPage from "./pages/QR/QRScannerPage";
import Menu from "./pages/Menu/Menu";
import { DefaultRoutesValues } from "ezpzos.core";
import Profile from "./pages/Profile/Profile";
import LoginSignupPage from "./pages/LoginOrSignup/LoginOrSignup";
import OTPPage from "./pages/OTPPage/OTPPage";
import BusinessHome from "./pages/Kitchen/BusinessHome";
import PastOrder from "./pages/PastOrder/PastOrder";
import MenuCreate from "./pages/Menu/MenuCreate";
import PersonalInfo from "./pages/Profile/PersonalInfo";

const AppRoutes: React.FC = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path={DefaultRoutesValues.AuthRoutes.Signup} element={<LoginSignupPage  isLogin={false}  />} />
		<Route path={DefaultRoutesValues.AuthRoutes.Login} element={<LoginSignupPage isLogin={true} />} />
		<Route path={DefaultRoutesValues.AuthRoutes.OTP} element={<OTPPage />} />

		<Route path={DefaultRoutesValues.MenuRoutes.Scan} element={<QRScannerPage />} />
		<Route path={DefaultRoutesValues.MenuRoutes.DineIn} element={<Menu />} />
		<Route path={DefaultRoutesValues.MenuRoutes.TakeAway} element={<Menu />} />
		<Route path={DefaultRoutesValues.UserRoutes.Profile} element={<Profile />} />
		<Route path={DefaultRoutesValues.UserRoutes.UserInfo} element={<PersonalInfo />} />
		<Route path={DefaultRoutesValues.UserRoutes.PastOrders} element={<PastOrder />} />

		{/* Business Routes */}
		<Route path={DefaultRoutesValues.BusinessRoutes.Home} element={<BusinessHome BusinessHomePageValues={{IsLoggedIn:true, HomePageButtonList:[],NotificationList:[]}}/>} />
		<Route path={DefaultRoutesValues.BusinessRoutes.CreateMenu} element={<MenuCreate />} />

		
	</Routes>
);

export default AppRoutes;
