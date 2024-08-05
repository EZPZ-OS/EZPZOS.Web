import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../Assets/Images/GoogleIcon.png";

const ContactForm: React.FC<{ isLogin?: boolean }> = ({ isLogin }) => {
	const navigate = useNavigate();

	const handleSendOTP = () => {
		navigate("/otp");
	};

	return (
		<div className="flex flex-wrap max-w-screen-sm justify-center align-center mt-[111px] mx-auto font-sans font-normal">
			<div className="relative">
				<p className="bg-[#D9D9D9] text-[#4D4D4D] text-xl rounded-lg absolute top-1 left-1 py-2 px-4">+61</p>
				<input
					type="tel"
					placeholder="Phone Number"
					className="block h-[50px] w-[370px] pl-20 rounded-lg bg-[#F8F9FA] text-xl placeholder:text-[#988B8B] focus:outline-none"
				/>
				<p className="bg-[#D9D9D9] text-[#FFFFFF] rounded-lg absolute bottom-3.5 right-5 pb-[4.5px] px-[5px] leading-none text-">
					...
				</p>
			</div>
			<button
				onClick={handleSendOTP}
				className="h-[50px] w-[370px] rounded-lg mt-4 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#BBDAFFF5] to-[#FF993CF5]"
			>
				SEND OTP
			</button>
			<div className="w-[387px] h-[2px] mt-16 bg-[#D8D2D280]/30 relative">
				<p className="text-[#FBFBFB] text-[11px] absolute left-[190px] -top-[12px] rounded-full bg-[#000000] p-[6px]">
					OR
				</p>
			</div>
			<button className="h-[50px] w-[370px] text-center text-xl text-[#4D4D4D] mt-16 bg-[#F8F9FA] rounded-lg relative">
				<img src={GoogleIcon} className="absolute left-5 top-[10px]" alt="Google Icon" />
				Continue with Google
			</button>
			<div className="w-[387px] h-[2px] mt-[70px] bg-[#D8D2D280]/30 relative">
				<p className="text-[#FBFBFB] text-[11px] absolute left-[190px] -top-[12px] rounded-full bg-[#000000] p-[6px]">
					OR
				</p>
			</div>
			<button className="h-[50px] w-[370px] rounded-lg mt-16 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#FFB682F5] via-[#F8A27AF5] to-[#F28C83F5]">
				{isLogin ? "SIGN IN" : "SIGN UP"}
			</button>
		</div>
	);
};

export default ContactForm;
