import apiClient from "../Utils/axiosConfig";
import { DefaultLoginSignupValues, LogHandler, LogLevel, OTPType, User } from "ezpzos.core";
import { store } from "../Store/Store";
import { login, logout } from "../Store/AuthSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const logger = new LogHandler("AuthService");

export const AuthService = {
	//signup request
	signupRequest: async (
		otpToken: string | null | undefined,
		username: string,
		email: string,
		mobile: string,
		otpTarget: OTPType | null
	): Promise<{ success: boolean; message?: string; token?: string; user?: User }> => {
		try {
			const response = await apiClient.post(`/auth/signup?token=${otpToken}`, {
				username,
				email,
				mobile,
				otpTarget
			});
			if (response.status === 201) {
				const { token: JWTToken, user } = response.data;
				logger.Log("signup", "User created successfully", LogLevel.INFO);
				return { success: true, token: JWTToken, user };
			} else {
				return {
					success: false,
					message: DefaultLoginSignupValues.UserSignupFormDefaultValue.ErrorMessages.default
				};
			}
		} catch (error: any) {
			// Handle errors that occur during the request
			type StatusCodes = 401 | 403 | 404 | 409 | 422 | 500;
			const status = error.response?.status as StatusCodes | undefined;

			// Handle error message depending on the status code
			const errorMessage =
				DefaultLoginSignupValues.UserSignupFormDefaultValue.ErrorMessages[status as StatusCodes] ||
				DefaultLoginSignupValues.UserSignupFormDefaultValue.ErrorMessages.default;

			logger.Log("signup", errorMessage, LogLevel.ERROR);

			// Return the error information
			return { success: false, message: errorMessage };
		}
	},

	//login by mobile request
	loginByMobileRequest: async (
		mobile: string | null,
		otpToken: string | null | undefined,
		otpTarget: OTPType
	): Promise<{ success: boolean; message?: string; token?: string; user?: User }> => {
		try {
			const response = await apiClient.post("/auth/login", { mobile, otpToken, otpTarget });
			// Check if the response contains the token and store it in localStorage
			if (response.status === 200 && response.data.token) {
				const { token: JWTToken, user } = response.data;
				logger.Log("loginByMobile", "User login successfully", LogLevel.INFO);
				return { success: true, token: JWTToken, user };
			} else {
				return {
					success: false,
					message: DefaultLoginSignupValues.MobileLoginDefaultValue.LoginErrorMessage.default
				};
			}
		} catch (error: any) {
			// Handle errors that occur during the request
			type StatusCodes = 401 | 403 | 404;
			const status = error.response?.status as StatusCodes | undefined;

			// Handle error message depending on the status code
			const errorMessage =
				DefaultLoginSignupValues.MobileLoginDefaultValue.LoginErrorMessage[status as StatusCodes] ||
				DefaultLoginSignupValues.MobileLoginDefaultValue.LoginErrorMessage.default;

			logger.Log("loginByMobile", errorMessage, LogLevel.ERROR);

			// Return the error information
			return { success: false, message: errorMessage };
		}
	},
	// Validate token
	validateToken: async (): Promise<boolean> => {
		try {
			const authToken = localStorage.getItem("authToken");
			const savedUser = localStorage.getItem("user");

			if (!authToken || !savedUser) {
				store.dispatch(logout());
				return false;
			}

			// Validate the token by making a request to the backend
			await apiClient.get("/auth/validate-token", {
				headers: {
					Authorization: `Bearer ${authToken}`
				}
			});

			// If successful, dispatch the login action with the existing token and user data
			const user: User = JSON.parse(savedUser);
			store.dispatch(login({ token: authToken, user }));

			return true;
		} catch (error: any) {
			// If token is invalid or expired, log the user out
			store.dispatch(logout());
			return false;
		}
	}
};

// AuthChecker component
export const AuthChecker = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        AuthService.validateToken();
    }, [dispatch]);

    return null;
};
