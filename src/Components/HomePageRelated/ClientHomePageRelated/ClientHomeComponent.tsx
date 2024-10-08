import { useEffect } from "react";
import { ClientHomePageValuesProp } from "../../../Pages/Home";
import { DefaultHomePageValues } from "ezpzos.core";
import Logo from "../../../Assets/Images/Logo.png";
import ClientAvatar from "../../../Assets/Icons/ClientAvatar.png";
import HomePageButtons from "../HomePageButtons";
import HomePageNotification from "../HomePageNotification";
import LogoWithName from "../../../Assets/Images/LogoWithName.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { setAvatar } from "../../../Store/AuthSlice";
import { UserService } from "../../../Services/Private/UserService";

/**
 * @param isLoggedIn - Boolean to store login status data, passed from EZPZ.CORE ClientPageValuesProp constant.
 * @param data - Pass a DefaultClientHomePageValues mock data into Client Home Component.
 */
const ClientHomeComponent = (data: ClientHomePageValuesProp) => {
	const isLoggedIn = data.ClientHomePageValues.IsLoggedIn;
	const dispatch = useDispatch();
	let user = null;
	if (isLoggedIn === true) {
		user = useSelector((state: RootState) => state.auth.user);
	}

	useEffect(() => {
		if (isLoggedIn && user?.Id) {
			const fetchAvatar = async () => {
				const response = await UserService.getAvatarRequest(user.Id);
				if (response.result && response.avatarUrl) {
					// If avatar is not an empty string, use the fetched avatar; otherwise, use the default avatar
					const avatarToUse = response.avatarUrl !== "" ? response.avatarUrl : ClientAvatar;
					dispatch(setAvatar(avatarToUse));
				} else {
					console.error(response.message);
				}
			};
			fetchAvatar();
		}
	}, [isLoggedIn, user?.Id, dispatch]);

	const loggedInLogo = (
		<Link to="/profile">
			{user?.Avatar ? (
				<img
					src={user.Avatar}
					alt="User Avatar"
					className="rounded-full w-24 h-24 mt-44"
					style={{ objectFit: "cover", objectPosition: "center" }}
				/>
			) : (
				<p>Loading avatar...</p>
			)}
		</Link>
	);

	const notLoggedInLogo = (
		<div>
			<img src={Logo} className="w-[90px] h-[100px] mt-44" alt="logo" />
			<p className="text-2xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FFB682F5] text-transparent bg-clip-text">
				{DefaultHomePageValues.NotLoggedInLogo}
			</p>
		</div>
	);

	const loggedInOpening = (
		<div className="text-center">
			<p className="text-3xl font-black mt-8 bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text">
				Hi, {user?.Username}
			</p>
			<p className="text-sm font-bold bg-gradient-to-r text-center from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text mt-1">
				{DefaultHomePageValues.LoggedInOpening}
			</p>
		</div>
	);

	const BottomLogo = (
		<div>
			<img src={LogoWithName} className="mt-24" alt="logo" />
		</div>
	);

	const notificationlist = (
		<div className="flex flex-col items-center w-4/5 mt-6">
			{/* Get HomePageNotification from data variable and use map to display each HomePageNotification */}
			{data.ClientHomePageValues.NotificationList.map((notification, index) => (
				<HomePageNotification key={index} title={notification.Title} content={notification.Content} />
			))}
		</div>
	);

	const notLoggedInSignInButton = (
		<div className="flex-col">
			<Link to="/login">
				<button className="h-[50px] w-[370px] rounded-lg mt-14 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#FFB682F5] via-[#F8A27AF5] to-[#F28C83F5]">
					{DefaultHomePageValues.NotLoggedInSignInButton.SignInButtonDefualtValue}
				</button>
			</Link>
			<div className="mt-4">
				<span className=" text-[#dcdcdcbb] ">
					{DefaultHomePageValues.NotLoggedInSignInButton.OfferSignUpDefaultValue}
				</span>
				<Link to="/signup" className="font-bold text-[#dcdcdcbb] ">
					{DefaultHomePageValues.NotLoggedInSignInButton.SignUpButtonDefaultValue}
				</Link>
			</div>
		</div>
	);

	return (
		<div className="w-full flex flex-col justify-center items-center">
			{isLoggedIn ? loggedInLogo : notLoggedInLogo}
			{isLoggedIn ? loggedInOpening : ""}

			{/* Get HomePageButtonList from data variable and use map to display each homepage button */}
			<div className="flex gap-16">
				{data.ClientHomePageValues.HomePageButtonList.map((buttonData, index) => (
					<HomePageButtons
						key={index}
						img={buttonData.Img}
						title={buttonData.Title}
						path={buttonData.Path} // Pass the path prop to HomePageButtons
					/>
				))}
			</div>

			{isLoggedIn ? notificationlist : ""}
			{isLoggedIn ? BottomLogo : ""}
			{isLoggedIn ? "" : notLoggedInSignInButton}
		</div>
	);
};

export default ClientHomeComponent;
