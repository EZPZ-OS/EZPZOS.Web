import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import QRScannerPage from "./Pages/QR/QRScannerPage";
import Menu from "./Pages/Menu/Menu";
import { DefaultRoutesValues } from "ezpzos.core";
import Profile from "./Pages/Profile/Profile";
import LoginSignupPage from "./Pages/LoginOrSignup/LoginOrSignup";
import OTPPage from "./Pages/OTPPage/OTPPage";
import PastOrder from "./Pages/PastOrder/PastOrder";
import MenuCreate from "./Pages/Menu/MenuCreate";
import PersonalInfo from "./Pages/Profile/PersonalInfo";
import BookPage from "./Components/BookPage/BookPage";
import BusinessHome from "./Pages/Kitchen/BusinessHome";
import BookConfirmPage from "./Pages/BookConfrimPage/BookConfirmPage";
import BookDone from "./Components/ClientBookDone/BookDone";
import OrderStatus from "./Pages/OrderStatus/OrderStatus";
import ClientCartPage from "./Pages/ClientCart/ClientCartPage";
import DishList from "./Pages/DishList/DishList";
import DishProduct from "./Pages/DishProduct/DishProduct";

const AppRoutes: React.FC = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path={DefaultRoutesValues.AuthRoutes.Signup} element={<LoginSignupPage isLogin={false} />} />
		<Route path={DefaultRoutesValues.AuthRoutes.Login} element={<LoginSignupPage isLogin={true} />} />
		<Route path={DefaultRoutesValues.AuthRoutes.OTP} element={<OTPPage />} />
		<Route path={DefaultRoutesValues.MenuRoutes.Scan} element={<QRScannerPage />} />
		<Route path={DefaultRoutesValues.MenuRoutes.DineIn} element={<Menu />} />
		<Route path={DefaultRoutesValues.MenuRoutes.TakeAway} element={<Menu />} />
		<Route path={DefaultRoutesValues.UserRoutes.Profile} element={<Profile />} />
		<Route path={DefaultRoutesValues.UserRoutes.UserInfo} element={<PersonalInfo />} />
		<Route path={DefaultRoutesValues.UserRoutes.PastOrders} element={<PastOrder />} />
		<Route path={DefaultRoutesValues.CartRoutes.ClientCart} element={<ClientCartPage />} />
		<Route path={DefaultRoutesValues.MenuRoutes.List} element={<DishList />} />
		<Route path={DefaultRoutesValues.MenuRoutes.Detail} element={<DishProduct />} />

		{/* Business Routes */}
		<Route path={DefaultRoutesValues.BusinessRoutes.Home} element={<BusinessHome />} />
		<Route path={DefaultRoutesValues.BusinessRoutes.CreateMenu} element={<MenuCreate />} />
		<Route path={DefaultRoutesValues.MenuRoutes.Edit} element={<MenuCreate />} />

		{/* Book Routes*/}
		<Route path={DefaultRoutesValues.BookRoutes.Book} element={<BookPage />} />
		<Route path={DefaultRoutesValues.BookRoutes.Confirm} element={<BookConfirmPage />} />
		<Route
			path={DefaultRoutesValues.BookRoutes.Booked}
			element={<BookDone people={2} date={""} time={""} userName={""} />}
		/>

		{/* Order Routes*/}
		<Route path={DefaultRoutesValues.OrderRoutes.OrderStatus} element={<OrderStatus />} />
	</Routes>
);

export default AppRoutes;
