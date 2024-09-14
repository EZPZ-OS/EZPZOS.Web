import { useAlertTag } from "./useAlertTag";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { DefaultRoutesValues } from "ezpzos.core";

/**
 * useAuthCheck Hook
 *
 * This hook checks if the user is authenticated (logged in) by looking at the Redux state.
 * If the user is not logged in, it shows an alert message using `useAlertTag` and navigates to the login page after a delay.
 *
 * @returns {boolean} - Returns the current authentication status (true if logged in, false if not).
 */
function useAuthCheck() {
	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn); // Get login status from Redux

	// Call useAlertTag at the top level of the hook
	const { triggerAlert } = useAlertTag({ timeout: 3000 });

	useEffect(() => {
		if (!isLoggedIn) {
			// Trigger the alert and navigate to login page after the alert is hidden
			triggerAlert({
				message: "Please login first.",
				isError: true,
				navigateTo: `/${DefaultRoutesValues.AuthRoutes.Login}` // Navigate to the login page
			});
		}
	}, [isLoggedIn, triggerAlert]);

	return isLoggedIn;
}

export default useAuthCheck;
