import apiClient from "../Utils/axiosConfig";
import { LogHandler, LogLevel, User } from "ezpzos.core";

const logger = new LogHandler("PrivateService");

export const UserService = {
    updateUserRequest: async (userData: Partial<User>): Promise<{ success: boolean; message?: string; user?: User }> => {
      try {
        // Log the update request for debugging
        logger.Log("updateUserRequest", `Attempting to update user with ID: ${userData.Id}`, LogLevel.INFO);
  
        // Make a PUT request to the backend API to update the user
        const response = await apiClient.put<{ user: User; result: boolean; errorCode?: number; errorMessage?: string }>(
          `/private/user/update/${userData.Id}`,
          userData // The updated user data
        );
  
        // Check if the update was successful
        if (response.data.result) {
          logger.Log("updateUserRequest", `User updated successfully`, LogLevel.INFO);
          return {
            success: true,
            user: response.data.user,
          };
        } else {
          logger.Log("updateUserRequest", `Failed to update user: ${response.data.errorMessage}`, LogLevel.ERROR);
          return {
            success: false,
            message: response.data.errorMessage || "Failed to update user.",
          };
        }
      } catch (error: any) {
        // Log any unexpected errors
        logger.Log("updateUserRequest", `Error updating user: ${error.message}`, LogLevel.ERROR);
        return {
          success: false,
          message: error.message || "An unexpected error occurred during the user update.",
        };
      }
    },
  };