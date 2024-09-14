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

const PersonalInfo: React.FC = () => {
	let user = useSelector((state: RootState) => state.auth.user);
	const isAuthenticated = useAuthCheck();
	const [isLogout, setIsLogout] = useState<boolean>(false); // Track if the user logged out intentionally

	// Call useAlertTag at the top level of the component
	const { triggerAlert } = useAlertTag({ timeout: 3000 });

	// Effect to manage the alert and navigation for unauthenticated users
	useEffect(() => {
		if (!isAuthenticated && !isLogout) {
			// Trigger the alert when user is not authenticated and hasn't logged out intentionally
			triggerAlert({
				message: "Please login first.",
				isError: true,
				navigateTo: "/login", // Navigate to login page
			});
		}
	}, [isAuthenticated, isLogout, triggerAlert]);

	// Handle the logout action
	const handleLogout = () => {
		setIsLogout(true); // Mark as logged out
		// Trigger alert and navigate to home page
		triggerAlert({
			message: "User logged out successfully.",
			isError: false,
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
