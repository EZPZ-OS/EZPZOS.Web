import BottomNavBar from "../../Components/BottomNavBar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import ClientAvatar from "../../Assets/Icons/ClientAvatar.png";
import { DefaultPersonalInfoPageValues } from "ezpzos.core";

const PersonalInfo: React.FC = () => {
	return (
		<div className="flex flex-col w-screen font-lato">
			<div className="bg-nav-bar-gradient w-full h-[142px] flex items-center">
				<Link to={"/profile"} className="flex">
					<IoMdArrowRoundBack className="text-white text-3xl ml-[30px]" />
					<p className="text-white text-[20px] ml-[10px]">{DefaultPersonalInfoPageValues.BackButton}</p>
				</Link>
			</div>
			<div
				className="mx-auto bg-[#F3F3F3] w-full max-w-[374px] h-[700px] rounded-3xl relative -top-[40px] -z-10"
				style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
			>
				<img src={ClientAvatar} className="ml-[42px] mt-[63px] w-[107px] h-[107px]"></img>
				<MdOutlineEdit
					className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] relative bottom-[33px] left-[123px]"
					style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
				/>
				<div className="w-full h-[8px] bg-[#E2DEDE]"></div>
				<div className="ml-[40px] mt-[18px]">
					<p className="text-[24px] font-bold ">{DefaultPersonalInfoPageValues.InfoTitle}</p>
					<div className="mt-[15px] ml-[3px] w-full relative">
						<label className="text-[18px] font-bold">{DefaultPersonalInfoPageValues.NameLabel}</label>
						<p className="text-[#898686] text-[16px]">Username</p>
						<MdOutlineEdit
							className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] absolute bottom-[5px] right-[33px]"
							style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
						/>
					</div>
					<div className="mt-[30px] ml-[3px] w-full relative">
						<label className="text-[18px] font-bold">{DefaultPersonalInfoPageValues.PhoneLabel}</label>
						<p className="text-[#898686] text-[16px]">0412 345 678</p>
						<MdOutlineEdit
							className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] absolute bottom-[5px] right-[33px]"
							style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
						/>
					</div>
					<div className="mt-[30px] ml-[3px] w-full relative">
						<label className="text-[18px] font-bold">{DefaultPersonalInfoPageValues.EmailLabel}</label>
						<p className="text-[#898686] text-[16px]">12345@gmail.com</p>
						<MdOutlineEdit
							className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] absolute bottom-[5px] right-[33px]"
							style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
						/>
					</div>
					<button
						className="bg-[#B2A49A] mx-auto mt-[90px] w-[294px] h-[41px] text-center text-white text-[20px] font-sans rounded-xl"
						style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.28)" }}
					>
						{DefaultPersonalInfoPageValues.LogOutButton}
					</button>
				</div>
			</div>

			<BottomNavBar isClient />
		</div>
	);
};

export default PersonalInfo;
