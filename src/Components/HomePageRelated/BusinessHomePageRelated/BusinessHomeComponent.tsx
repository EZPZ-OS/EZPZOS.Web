import { BusinessHomePageDataProp } from "../../../pages/Kitchen/Kitchen";
import BusinessAvatar from "../../../Assets/Icons/BusinessAvatar.png";
import LogoWithName from "../../../Assets/Images/LogoWithName.png";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/Logo.png";
import HomePageButtons from "../HomePageButtons";
import HomePageNotification from "../HomePageNotification";

const BusinessHomeComponent = (data: BusinessHomePageDataProp) => {
	const isLoggedIn = data.data?.isLoggedIn;
	const loggedInLogo = <img src={BusinessAvatar} className="w-[110px] h-[110px] mt-32" alt="logo" />;
	const loggedInOpening = (
		<div>
			<p className="text-3xl font-black	mt-8 bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text">
				Hi @Username,
			</p>
			<p className="text-sm font-bold bg-gradient-to-r text-center from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text mt-1">
				Would you like to...
			</p>{" "}
		</div>
	);

	const notLoggedInLogo = (
		<div>
			<img src={Logo} className="w-[90px] h-[100px] mt-44" alt="logo" />
			<p className="text-2xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FFB682F5] text-transparent bg-clip-text">
				EZPZ OS
			</p>
			;
		</div>
	);
	const notLoggedInOpening = (
		<div>
			<p className="text-3xl font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text mt-10">
				WELCOME BACK
			</p>
			<p className="text-3xl font-bold bg-gradient-to-r text-center from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text">
				:D
			</p>
		</div>
	);

	const homePageButton = (
		<div className="flex gap-16">
			{data.data?.homePageButtonList.map((data, index) => {
				return <HomePageButtons key={index} img={data.img} title={data.title} />;
			})}
		</div>
	);

	const notificationList = (
		<div className="flex flex-col items-center w-4/5 mt-6">
			{data.data?.notificationList.map((item, index) => {
				return <HomePageNotification key={index} title={item.title} content={item.content} />;
			})}
		</div>
	);

	const bottomLogo = <img src={LogoWithName} className="mt-8" alt="logo" />;

	const notLoggedInSignInButton = (
		<div className="flex-col">
			<Link to="signup">
				<button className="h-[50px] w-[370px] rounded-lg mt-14 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#FF993C] via-[#D95E5A] to-[#BA2F72]">
					LOG IN
				</button>
			</Link>
		</div>
	);

	return (
		<div>
			<div className="w-full flex flex-col justify-center items-center">
				{isLoggedIn ? loggedInLogo : notLoggedInLogo}
				{isLoggedIn ? loggedInOpening : notLoggedInOpening}
				{isLoggedIn ? "" :notLoggedInSignInButton}
				{isLoggedIn ? homePageButton : ""}
				{isLoggedIn ? notificationList : ""}
                {isLoggedIn ? bottomLogo : ""}
			</div>
		</div>
	);
};

export default BusinessHomeComponent;
