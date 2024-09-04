import React, { useEffect, useState } from "react";
import TopNav from "../../Components/TopNav";
import BottomNavBar from "../../Components/BottomNavBar";
import UserDashboard from "../../Components/UserProfileRelated/UserDashboard";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { useNavigate } from "react-router-dom";
import AlertTag from "../../Components/AlertTag";

/**
 * This is the client profile page.
 * @param user is user information received from database when user logged in to be retrieved from Redux for display purpose.
 */

const Profile: React.FC = () => {
    let user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (!user) {
            setShowAlert(true);

            const timer = setTimeout(() => {
                navigate("/");
            }, 3000);

            // Cleanup the timeout if the component unmounts before the timeout triggers
            return () => clearTimeout(timer);
        }
    }, [user, navigate]);

    if (!user) {
        return (
            <div className="flex flex-col items-center">
                {showAlert && <AlertTag alertMessage="User not logged in" isError={true} />}
            </div>
        );
    }
    return(
        <div className="flex flex-col items-center">
            <TopNav hideSearch={true}/> {/* Pass hideSearch prop to hide the search icon */}
            <UserDashboard avatar = {user.Avatar} username = {user.Username}/>
            <BottomNavBar isClient={true}/>
        </div>
    )
}


export default Profile