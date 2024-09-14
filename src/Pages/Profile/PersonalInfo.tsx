import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import BottomNavBar from "../../Components/BottomNavBar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { DefaultPersonalInfoPageValues } from "ezpzos.core";
import useAuthCheck from "../../Hooks/useAuthCheck";
import { useAlertTag } from "../../Hooks/useAlertTag";
import UserInfoCard from "../../Components/UserProfileRelated/UserInfoCard";

/**
 * This PersonalInfo page is responsible for displaying and managing the user's personal information.
 * It so far includes:
 * 
 * - Fetching the user's authentication status using `useAuthCheck`.
 * - Displaying user details such as avatar, username, phone number, and email, along with an option to log out.
 * - Handling both intentional logouts (via the "Logout" button) and unintentional session terminations (when the user is unauthenticated).
 * - Showing appropriate alert messages like "Please login first" or "User logged out successfully" based on user actions.
 * 
 * This component conditionally renders content based on whether the user is authenticated or not and communicates with child components like `UserInfoCard`.
 */

const PersonalInfo: React.FC = () => {
	let user = useSelector((state: RootState) => state.auth.user);
	const isAuthenticated = useAuthCheck();
	const [isLogout, setIsLogout] = useState<boolean>(false); // Track if the user logged out intentionally

	// Effect to manage the alert and navigation
	useEffect(() => {
		if (!isAuthenticated && !isLogout) {
			// Show "Please login first" alert and navigate to login page
			useAlertTag({
				alertMessage: "Please login first.",
				isError: true,
				navigateTo: "/login",
			});
		}
	}, [isAuthenticated, isLogout]);

	// Handle the logout action
	const handleLogout = () => {
		setIsLogout(true); // Mark as logged out
		// Show "User logged out successfully" alert and navigate to home page
		useAlertTag({
			alertMessage: "User logged out successfully.",
			navigateTo: "/",
		});
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
