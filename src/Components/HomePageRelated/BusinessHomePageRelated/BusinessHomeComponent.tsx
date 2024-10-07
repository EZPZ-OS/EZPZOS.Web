import { useEffect } from "react";
import BusinessAvatar from "../../../Assets/Icons/BusinessAvatar.png";
import LogoWithName from "../../../Assets/Images/LogoWithName.png";
import { DefaultHomePageValues } from "ezpzos.core";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/Logo.png";
import HomePageButtons from "../HomePageButtons";
import HomePageNotification from "../HomePageNotification";
import { BusinessPageValuesProp } from "../../../Pages/Kitchen/BusinessHome";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../Store/Store";
import { setAvatar } from "../../../Store/AuthSlice";
import { UserService } from "../../../Services/Private/UserService";

/**
 * @param isLoggedIn is a variable to store login status data that passed from EZPZ.CORE BusienssPageValuesProp constant,
 * @param data pass a DefaultBusinessHomePageValues mock data  into Business Home Component.
 */

const BusinessHomeComponent = (data: BusinessPageValuesProp) => {
	const isLoggedIn = data.IsLoggedIn;
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.auth.user);

	useEffect(() => {
		if (isLoggedIn && user?.Id) {
			const fetchAvatar = async () => {
				const response = await UserService.getAvatarRequest(user.Id);
				if (response.result && response.avatarUrl) {
					// If avatar is not an empty string, use the fetched avatar; otherwise, use the default avatar
					const avatarToUse = response.avatarUrl !== "" ? response.avatarUrl : BusinessAvatar;
					dispatch(setAvatar(avatarToUse));
				} else {
					console.error(response.message);
				}
			};
			fetchAvatar();
		}
	}, [isLoggedIn, user?.Id, dispatch]);
	const loggedInLogo = user ? (
		<img
			src={user.Avatar}
			className="w-[110px] h-[110px] mt-32 rounded-full"
			style={{ objectFit: "cover", objectPosition: "center" }}
			alt="logo"
		/>
	) : (
		<img
			src={BusinessAvatar}
			className="w-[110px] h-[110px] mt-32 rounded-full"
			style={{ objectFit: "cover", objectPosition: "center" }}
			alt="logo"
		/>
	);

	const loggedInOpening = (
		<div className="text-center">
			<p className="text-3xl font-black mt-8 bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text">
				Hi, {user?.Username}
			</p>
			<p className="text-sm font-bold bg-gradient-to-r text-center from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text mt-1">
				{DefaultHomePageValues.LoggedInOpening[0]}
			</p>
			<p className="text-sm font-bold bg-gradient-to-r text-center from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text mt-1">
				{DefaultHomePageValues.LoggedInOpening[1]}
			</p>{" "}
		</div>
	);

	const notLoggedInLogo = (
		<div>
			<img src={Logo} className="w-[90px] h-[100px] mt-44" alt="logo" />
			<p className="text-2xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FFB682F5] text-transparent bg-clip-text">
				{DefaultHomePageValues.NotLoggedInLogo}
			</p>
		</div>
	);
	const notLoggedInOpening = (
		<div>
			<p className="text-3xl font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text mt-10">
				{DefaultHomePageValues.NotLoggedInOpening[0]}
			</p>
			<p className="text-3xl font-bold bg-gradient-to-r text-center from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text">
				{DefaultHomePageValues.NotLoggedInOpening[1]}
			</p>
		</div>
	);

	const homePageButton = (
		<div className="flex gap-16">
			{/*get HomePageButtonList from data variable and use map to display each homepage button*/}
			{data.HomePageButtonList.map((data, index) => {
				return <HomePageButtons key={index} img={data.Img} title={data.Title} path={data.Path} />;
			})}
		</div>
	);

	const notificationList = (
		<div className="flex flex-col items-center w-4/5 mt-6">
			{/*get HomePageNotification from data variable and use map to display each HomePageNotification*/}
			{data.NotificationList.map((item, index) => {
				return <HomePageNotification key={index} title={item.Title} content={item.Content} />;
			})}
		</div>
	);

	const bottomLogo = <img src={LogoWithName} className="mt-8" alt="logo" />;
	const notLoggedInSignInButton = (
		<div className="flex-col">
			<Link to="signup">
				<button className="h-[50px] w-[370px] rounded-lg mt-14 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#FF993C] via-[#D95E5A] to-[#BA2F72]">
					{DefaultHomePageValues.NotLoggedInSignInButton.SignInButtonDefualtValue}
				</button>
			</Link>
		</div>
	);

	return (
		<div>
			<div className="w-full flex flex-col justify-center items-center">
				{isLoggedIn ? <Link to="/profile">{loggedInLogo} </Link> : notLoggedInLogo}
				{isLoggedIn ? loggedInOpening : notLoggedInOpening}
				{isLoggedIn ? "" : notLoggedInSignInButton}
				{isLoggedIn ? homePageButton : ""}
				{isLoggedIn ? notificationList : ""}
				{isLoggedIn ? bottomLogo : ""}
			</div>
		</div>
	);
};

export default BusinessHomeComponent;
