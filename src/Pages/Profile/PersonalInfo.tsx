import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/Store";
import BottomNavBar from "../../Components/BottomNavBar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { DefaultPersonalInfoPageValues } from "ezpzos.core";
import useAuthCheck from "../../Hooks/useAuthCheck";
import UserInfoCard from "../../Components/UserProfileRelated/UserInfoCard";
import { showAlert } from "../../Store/AlertSlice";

const PersonalInfo: React.FC = () => {
	let user = useSelector((state: RootState) => state.auth.user);
	const dispatch = useDispatch();
	const isAuthenticated = useAuthCheck();
	const [isLogout, setIsLogout] = useState<boolean>(false); // Track if the user logged out intentionally
	
	// Effect to manage the alert and navigation for unauthenticated users
	useEffect(() => {
		if (!isAuthenticated && !isLogout) {
			// Show alert when user is not authenticated and hasn't logged out intentionally
			dispatch(
				showAlert({
					message: "Please login first.",
					isError: true,
					navigateTo: "/login" // Navigate to login page
				})
			);
		}
	}, [isAuthenticated, isLogout, dispatch]);

	// Handle the logout action
	const handleLogout = () => {
		// Mark as logged out intentionally first
		setIsLogout(true);
	
		// Simulate delay to ensure the state update occurs before dispatching the alert
		setTimeout(() => {
		  // Trigger alert and navigate to home page
		  dispatch(
			showAlert({
			  message: "User logged out successfully.",
			  isError: false,
			  navigateTo: "/", // Navigate to home page
			})
		  );
		}, 30); // Slight delay to ensure the state updates correctly
	  };

	return (
		<div>
			{isAuthenticated && (
				<div className="flex flex-col w-screen font-lato">
					<div className="bg-nav-bar-gradient w-full h-[142px] flex items-center z-10">
						<Link to={"/profile"} className="flex">
							<IoMdArrowRoundBack className="text-white text-3xl ml-[30px]" />
							<p className="text-white text-[20px] ml-[10px]">
								{DefaultPersonalInfoPageValues.BackButton}
							</p>
						</Link>
					</div>
					<UserInfoCard
						avatar={user!.Avatar}
						username={user!.Username}
						phone={user!.Mobile}
						email={user!.Email}
						onLogout={handleLogout} // Pass logout handler to child
					/>
					<BottomNavBar isClient />
				</div>
			)}
		</div>
	);
};

export default PersonalInfo;
