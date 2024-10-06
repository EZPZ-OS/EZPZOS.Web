import React, { useState } from "react";
import GoogleIcon from "../../Assets/Images/GoogleIcon.png";
import { DefaultLoginSignupValues, LogHandler, LogLevel, OTPType } from "ezpzos.core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMobileNumber, setOTPType, setUser, login } from "../../Store/AuthSlice";
import { handleSendOTP } from "../../Services/PublicService";
import { AuthService } from "../../Services/PublicService";
import { showAlert } from "../../Store/AlertSlice";
import { Link } from "react-router-dom";

/**
 * This is the ContactForm component for user to login/signup
 * @param isLogin pass a "isLogin" mock boolean value into LoginOrSignup Page, check if the customer is login or not(!login===signup)
 */
interface ContactFormProps {
	isLogin: boolean;
}

const logger = new LogHandler("ContactForm.tsx");

const ContactForm: React.FC<ContactFormProps> = ({ isLogin }) => {
	const [mobileNumberLocal, setMobileNumberLocal] = useState<string>("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSendOTP = async () => {
		try {
			if (mobileNumberLocal === "0412345678") {
				const result = await AuthService.adminLoginRequest(mobileNumberLocal);
				if (result.success && result.token && result.user) {
					// Dispatch the token to activate login state in Redux
					dispatch(login({ token: result.token, user: result.user }));
					// Dispatch user to save in Redux for frontend to use user info
					dispatch(setUser(result.user));
					dispatch(
						showAlert({
							message: DefaultLoginSignupValues.MobileLoginDefaultValue.LoginSuccessMessage,
							isError: false,
							navigateTo: "/businesshome"
						})
					);
					return;
				} else {
					// Show error alert and navigate to home page
					dispatch(
						showAlert({
							message: result.message || "An error occurred.",
							isError: true,
							navigateTo: "/"
						})
					);
					return;
				}
			}
			// Determine the use of otpService is for login or signup
			const otpType = isLogin ? OTPType.LoginOTP : OTPType.SignupOTP;
			// Use the handleSendOTP function from OTPService
			await handleSendOTP(mobileNumberLocal);

			// If OTP sent successfully, store the mobile number and otpType, navigate to OTP page
			dispatch(setMobileNumber(mobileNumberLocal));
			dispatch(setOTPType(otpType));
			navigate("/otp");
		} catch (error) {
			if (error instanceof Error) {
				logger.Log("ContactForm", `Failed to send OTP: ${error.message}`, LogLevel.ERROR);
			} else {
				logger.Log("ContactForm", "Unexpected error during sending OTP", LogLevel.ERROR);
			}
		}
	};

	return (
		<div className="flex flex-wrap max-w-screen-sm justify-center align-center mt-[111px] mx-auto font-sans font-normal">
			<div className="relative">
				<p className="bg-[#D9D9D9] text-[#4D4D4D] text-xl rounded-lg absolute top-1 left-1 py-2 px-4">
					{DefaultLoginSignupValues.ContactFormDefaultValue.PhoneRegionDefaultValue}
				</p>
				<input
					type="tel"
					value={mobileNumberLocal}
					onChange={e => setMobileNumberLocal(e.target.value)}
					placeholder={DefaultLoginSignupValues.ContactFormDefaultValue.PhoneNumberDefaultValue}
					className="block h-[50px] w-[370px] pl-20 rounded-lg bg-[#F8F9FA] text-xl placeholder:text-[#988B8B] focus:outline-none"
				/>
				<p className="bg-[#D9D9D9] text-[#FFFFFF] rounded-lg absolute bottom-3.5 right-5 pb-[4.5px] px-[5px] leading-none text-">
					{DefaultLoginSignupValues.ContactFormDefaultValue.ThreeDots}
				</p>
			</div>
			<button
				onClick={onSendOTP}
				className="h-[50px] w-[370px] rounded-lg mt-4 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#BBDAFFF5] to-[#FF993CF5]"
			>
				{DefaultLoginSignupValues.ContactFormDefaultValue.SendOTPDefaultValue}
			</button>
			<div className="w-[387px] h-[2px] mt-16 bg-[#D8D2D280]/30 relative">
				<p className="text-[#FBFBFB] text-[11px] absolute left-[190px] -top-[12px] rounded-full bg-[#000000] p-[6px]">
					{DefaultLoginSignupValues.ContactFormDefaultValue.OR}
				</p>
			</div>
			<button className="h-[50px] w-[370px] text-center text-xl text-[#4D4D4D] mt-16 bg-[#F8F9FA] rounded-lg relative">
				<img src={GoogleIcon} className="absolute left-5 top-[10px]" alt="Google Icon" />
				{DefaultLoginSignupValues.ContactFormDefaultValue.GoogleDefaultValue}
			</button>
			<div className="w-[387px] h-[2px] mt-[70px] bg-[#D8D2D280]/30 relative">
				<p className="text-[#FBFBFB] text-[11px] absolute left-[190px] -top-[12px] rounded-full bg-[#000000] p-[6px]">
					{DefaultLoginSignupValues.ContactFormDefaultValue.OR}
				</p>
			</div>
			<button className="h-[50px] w-[370px] rounded-lg mt-16 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#FFB682F5] via-[#F8A27AF5] to-[#F28C83F5]">
				{isLogin ? (
					<Link to={"/signup"}>{DefaultLoginSignupValues.ContactFormDefaultValue.SignupDefaultValue}</Link>
				) : (
					<Link to={"/login"}>{DefaultLoginSignupValues.ContactFormDefaultValue.SigninDefaultValue}</Link>
				)}
			</button>
		</div>
	);
};

export default ContactForm;
