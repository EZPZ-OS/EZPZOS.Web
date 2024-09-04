import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import BottomNavBar from "../../Components/BottomNavBar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { DefaultPersonalInfoPageValues } from "ezpzos.core";

import UserInfoCard from "../../Components/UserProfileRelated/UserInfoCard";

const PersonalInfo: React.FC = () => {
	let user = useSelector((state: RootState) => state.auth.user);
	
	return (
		<div className="flex flex-col w-screen font-lato">
			<div className="bg-nav-bar-gradient w-full h-[142px] flex items-center z-10">
				<Link to={"/profile"} className="flex">
					<IoMdArrowRoundBack className="text-white text-3xl ml-[30px]" />
					<p className="text-white text-[20px] ml-[10px]">{DefaultPersonalInfoPageValues.BackButton}</p>
				</Link>
			</div>
			<UserInfoCard avatar={user?.Avatar} username={user?.Username} phone={user?.Mobile} email={user?.Email} />
			<BottomNavBar isClient />
		</div>
	);
};

export default PersonalInfo;
