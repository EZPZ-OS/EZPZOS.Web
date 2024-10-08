import apiClient from "../../Utils/axiosConfig";
import { LogHandler, LogLevel, User } from "ezpzos.core";

const logger = new LogHandler("PrivateService");

export const UserService = {
	updateUserRequest: async (
		userId: string,
		userData: Partial<User>
	): Promise<{ success: boolean; message?: string; user?: User }> => {
		try {
			// Log the update request for debugging
			logger.Log("updateUserRequest", `Attempting to update user with ID: ${userId}`, LogLevel.INFO);

			// Make a PUT request to the backend API to update the user
			const response = await apiClient.put<{
				user: User;
				result: boolean;
				errorMessage?: string;
			}>(`/private/user/${userId}`, userData);

			// Check if the update was successful
			if (response.data.result) {
				logger.Log("updateUserRequest", `User updated successfully`, LogLevel.INFO);
				return {
					success: true,
					user: response.data.user
				};
			} else {
				logger.Log("updateUserRequest", `Failed to update user: ${response.data.errorMessage}`, LogLevel.ERROR);
				return {
					success: false,
					message: response.data.errorMessage || "Failed to update user."
				};
			}
		} catch (error: any) {
			// Log any unexpected errors
			logger.Log("updateUserRequest", `Error updating user: ${error.message}`, LogLevel.ERROR);
			return {
				success: false,
				message: error.message || "An unexpected error occurred during the user update."
			};
		}
	},

	//update Avatar
	updateAvatarRequest: async (userId: string, avatarFile: File): Promise<{ result: boolean; message?: string }> => {
		try {
			// Log the update request for debugging
			logger.Log("updateAvatarRequest", `Attempting to update Avatar with ID: ${userId}`, LogLevel.INFO);

			// Create FormData to append the avatar file
			const formData = new FormData();
			formData.append("avatar", avatarFile); // The 'avatar' field must match what the backend expects

			// Make a PUT request to upload the avatar
			const response = await apiClient.put(`/private/user/${userId}/avatar`, formData, {
				headers: {
					"Content-Type": "multipart/form-data" // Ensure multipart/form-data header is set
				}
			});

			// Check if the update was successful
			if (response.data.result) {
				logger.Log("updateAvatarRequest", `Avatar updated successfully`, LogLevel.INFO);
				return {
					result: true
				};
			} else {
				logger.Log(
					"updateAvatarRequest",
					`Failed to update avatar: ${response.data.errorMessage}`,
					LogLevel.ERROR
				);
				return {
					result: false,
					message: response.data.errorMessage || "Failed to update avatar."
				};
			}
		} catch (error: any) {
			// Log any unexpected errors
			logger.Log("updateAvatarRequest", `Error updating avatar: ${error.message}`, LogLevel.ERROR);
			return {
				result: false,
				message: error.message || "An unexpected error occurred during the avatar update."
			};
		}
	},

	getAvatarRequest: async (userId: string): Promise<{ result: boolean; avatarUrl?: string; message?: string }> => {
		try {
			// Log the request for debugging
			logger.Log("getAvatarRequest", `Attempting to fetch avatar for user with ID: ${userId}`, LogLevel.INFO);

			// Make a GET request to fetch the avatar as a blob
			const response = await apiClient.get(`/private/user/${userId}/avatar`, {
				responseType: "blob" // Expect binary data (image)
			});

			// Create a local URL for the fetched avatar blob
			const avatarUrl = URL.createObjectURL(response.data);

			logger.Log("getAvatarRequest", `Avatar fetched successfully for user with ID: ${userId}`, LogLevel.INFO);

			return {
				result: true,
				avatarUrl // Return the URL that can be used to display the image
			};
		} catch (error: any) {
			// Log any unexpected errors
			logger.Log("getAvatarRequest", `Error fetching avatar: ${error.message}`, LogLevel.ERROR);
			return {
				result: false,
				message: error.message || "An unexpected error occurred while fetching the avatar."
			};
		}
	}
};
