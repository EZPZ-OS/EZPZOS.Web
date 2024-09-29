import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/Store";
import { setOTPVerified, setOTPTarget, setUser, login } from "../../Store/AuthSlice";
import { useNavigate } from "react-router-dom";
import { LogLevel, LogHandler, DefaultLoginSignupValues, OTPType } from "ezpzos.core";
import OTPForm from "../../Components/OTP/OTPForm";
import { AuthService } from "../../Services/PublicService";
import { showAlert } from "../../Store/AlertSlice";

const logger = new LogHandler("OTPPage.tsx");

const OTPPage: React.FC = () => {
	const mobileNumber = useSelector((state: RootState) => state.auth.mobileNumber);
	const otpType = useSelector((state: RootState) => state.auth.otpType);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// This handleCompleteOTP function handles OTP completion
	const handleCompleteOTP = async (otpToken: string, exp: number, otpTarget: OTPType) => {
		dispatch(setOTPVerified(true)); // Set OTP as verified in Redux
		dispatch(setOTPTarget(otpTarget)); // Set OTP target in Redux
		console.log("otpTarget in OTPPage:", otpTarget);

		if (otpTarget === OTPType.SignupOTP) {
			// Navigate to the signup page with the JWT and expiration time as query parameters
			navigate(`/signup?token=${encodeURIComponent(otpToken)}&exp=${encodeURIComponent(exp.toString())}`);
			logger.Log("OTP", "Navigated to UserSignupForm successfully", LogLevel.INFO);
		} else if (otpTarget === OTPType.LoginOTP) {
			try {
				const result = await AuthService.loginByMobileRequest(mobileNumber, otpToken, otpTarget);
				if (result.success && result.token && result.user) {
					// Dispatch the token to activate login state in Redux
					dispatch(login({ token: result.token, user: result.user }));
					// Dispatch user to save in Redux for frontend to use user info
					dispatch(setUser(result.user));

					dispatch(
						showAlert({
						  message: DefaultLoginSignupValues.MobileLoginDefaultValue.LoginSuccessMessage,
						  isError: false,
						  navigateTo: "/profile", 
						})
					  );
				} else {
					// Show error alert and navigate to home page
					dispatch(
						showAlert({
							message: result.message || "An error occurred.",
							isError: true,
							navigateTo: "/"
						})
					)
				}
			} catch (error: any) {
				logger.Log("OTP", `Error during login: ${error.message}`, LogLevel.ERROR);
				// Show error alert and navigate to home page
				dispatch(
					showAlert({
						message: error.message || "An error occurred.",
						isError: true,
						navigateTo: "/"
					})
				)
			}
		}
	};

	return (
		<div className="flex h-screen w-screen bg-hero-pattern bg-cover relative overflow-hidden">
			<div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
				<div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
					<div className="fixed inset-0 flex items-end z-50">
						<div className="w-full">
							<OTPForm MobileNumber={mobileNumber} otpType={otpType} onComplete={handleCompleteOTP} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OTPPage;
