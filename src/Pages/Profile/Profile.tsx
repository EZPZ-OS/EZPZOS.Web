import React from "react";
import jwtDecode from 'jwt-decode';
import TopNav from "../../Components/TopNav";
import BottomNavBar from "../../Components/BottomNavBar";
import UserDashboard from "../../Components/UserProfileRelated/UserDashboard";
import { useNavigate } from 'react-router-dom';

interface User {
    avatar: string;
    username: string;
    mobile: string;
    email: string;
}
interface DecodedToken {
    Avatar: string;
    Username: string;
    Mobile: string;
    Email: string;
}

const getUserFromToken = (): User | null => {
    const token = localStorage.getItem('authToken');
    if (!token) return null;

    try {
        const decodedToken: any = jwtDecode(token);
        const user: User = {
            avatar: decodedToken.Avatar,
            username: decodedToken.Username,
            mobile: decodedToken.Mobile,
            email: decodedToken.Email
        };
        return user;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};
const Profile: React.FC = () => {
    const nagivate = useNavigate();
    const user = getUserFromToken();
    if (!user) {
        // Handle the case where user is null, e.g., redirect to login or show a message
        return <div>User not found. Please log in again.</div>;
    }
    return(
        <div className="flex flex-col items-center">
            <TopNav hideSearch={true}/> {/* Pass hideSearch prop to hide the search icon */}
            <UserDashboard avatar = {user.avatar} username = {user.username}/>
            <BottomNavBar isClient={true}/>
        </div>
    )
}


export default Profile