import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store';
import { setOTPVerified } from '../../Components/Auth/AuthSlice';
import { useNavigate } from 'react-router-dom';

import OTPForm from "../../Components/OTP/OTPForm";

const OTPPage: React.FC = () => {
	const mobileNumber = useSelector((state: RootState) => state.auth.mobileNumber);
	const dispatch = useDispatch();
	const navigate = useNavigate();

// this handleCompleteOTP function 
	const handleCompleteOTP = (otpToken:string, exp:number) => {
		dispatch(setOTPVerified(true)); // Set OTP as verified in Redux
		// Navigate to the signup page with the JWT and expiration time as query parameters
		navigate(`/signup?token=${encodeURIComponent(otpToken)}&exp=${encodeURIComponent(exp.toString())}`);
	  };

	return (
		<div className="flex h-screen w-screen bg-hero-pattern bg-cover relative overflow-hidden">
			<div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
				<div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
					<div className="fixed inset-0 flex items-end z-50">
						<div className="w-full">
							<OTPForm MobileNumber={mobileNumber} onComplete={handleCompleteOTP} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OTPPage;
