import apiClient from "../Utils/axiosConfig";
import { LogHandler, LogLevel, OTPType } from "ezpzos.core";

//calling backend send-otp API to send OTP message to user's mobile
export const handleSendBooking = async (cai, price, shuliang) => {
	try {
		const response = await apiClient.post("/booking/addnew?cai="+ cai, { cai, price, shuliang });
		if (response.status === 200) {
			logger.Log("OTPService", "OTP sent successfully", LogLevel.INFO);
			return response.data;
		} else if (response.status === 500) {
			logger.Log("OTPService", "Failed to send OTP", LogLevel.WARN);
			return null;
		}
	} catch (error) {
		logger.Log("OTPService", "Error sending OTP:", LogLevel.ERROR);
		handleError(error);
		throw new Error("Error during send OTP");
	}
};