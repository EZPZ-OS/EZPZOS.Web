import { ClientHomePageDataProp } from "../../../pages/Home";

import Logo from "../../../Assets/Images/Logo.png";
import ClientAvatar from "../../../Assets/Icons/ClientAvatar.png";
import HomePageButtons from "../HomePageButtons";
import HomePageNotification from "../HomePageNotification";
import LogoWithName from "../../../Assets/Images/LogoWithName.png";
import { Link } from "react-router-dom";

const ClientHomeComponent = (data: ClientHomePageDataProp) => {
	const isLoggedIn = data.data?.isLoggedIn;

	const loggedInLogo = <img src={ClientAvatar} className="w-[110px] h-[110px] mt-32" alt="logo" />;

	const notLoggedInLogo = (
		<div>
			<img src={Logo} className="w-[90px] h-[100px] mt-44" alt="logo" />
			<p className="text-2xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FFB682F5] text-transparent bg-clip-text">
				EZPZ OS
			</p>
		</div>
	);

	const loggedInOpening = (
		<div>
			<p className="text-3xl font-black	mt-8 bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text">
				Hi @Username,
			</p>
			<p className="text-sm font-bold bg-gradient-to-r text-center from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text mt-1">
				Would you like to...
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
			{data.data?.notificationList.map((data, index) => {
				return <HomePageNotification key={index} title={data.title} content={data.content} />;
			})}
		</div>
	);

    const notLoggedInSignInSignUpButton=( <div className="flex-col">
        <Link to="signup" >
        <button className="h-[50px] w-[370px] rounded-lg mt-14 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#FFB682F5] via-[#F8A27AF5] to-[#F28C83F5]">
         LOG IN
             </button>
        </Link>
        <div className="mt-4">
            <span className=" text-[#dcdcdcbb] ">Don't have an account? </span>
            <Link to="" className="font-bold text-[#dcdcdcbb] ">Sign up :）</Link>
        </div>

    </div>)


	return (
		<div className="w-full flex flex-col justify-center items-center">
			{isLoggedIn ? loggedInLogo : notLoggedInLogo}
			{isLoggedIn ? loggedInOpening : ""}

			<div className="flex gap-16">
				{data.data?.homePageButtonList.map((data, index) => {
					return <HomePageButtons key={index} img={data.img} title={data.title} />;
				})}
			</div>

			{isLoggedIn ? notificationlist : ""}
			{isLoggedIn ? BottomLogo : ""}
            {isLoggedIn? "":notLoggedInSignInSignUpButton}
		</div>
	);
};

export default ClientHomeComponent;
