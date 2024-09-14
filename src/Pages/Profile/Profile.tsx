import React from "react";
import TopNav from "../../Components/TopNav";
import BottomNavBar from "../../Components/BottomNavBar";
import UserDashboard from "../../Components/UserProfileRelated/UserDashboard";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import useAuthCheck from "../../Hooks/useAuthCheck";

/**
 * This is the client profile page.
 * @param user is user information received from database when user logged in to be retrieved from Redux for display purpose.
 */

const Profile: React.FC = () => {
	let user = useSelector((state: RootState) => state.auth.user);
	const isAuthenticated = useAuthCheck(); 

	return (
		<div>
			{isAuthenticated && (
				<div className="flex flex-col items-center">
					<TopNav hideSearch={true} /> {/* Pass hideSearch prop to hide the search icon */}
					<UserDashboard avatar={user!.Avatar} username={user!.Username} />
					<BottomNavBar isClient={true} />
				</div>
			)}
		</div>
	);
};

export default Profile;