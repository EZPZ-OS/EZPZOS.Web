import { useState, useEffect, useCallback } from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

/**
 * useAlertTag hook
 * 
 * This hook displays an alert message with customizable styles based on whether it's an error or success message. It automatically hides the alert after a given timeout and optionally navigates to a different route once the alert disappears.
 * 
 * @param {number} [timeout=3000] - The duration (in milliseconds) for which the alert is visible before automatically hiding. Defaults to `3000` (3 seconds).
 * 
 * @example
 * const { alertTag, triggerAlert } = useAlertTag({ timeout: 3000 });
 * 
 * triggerAlert("Operation successful!", false, "/dashboard");
 * 
 * triggerAlert is the callback function inside userAlertTag hook.
 * It triggers the alert with the specified options.
 * 
 * @param {string} options.message - The message to display inside the alert. This will be shown to the user.
 * @param {boolean} [options.isError=false] - Determines whether the alert is styled as an error (true) or success (false). Defaults to `false` (success).
 * @param {string} [options.navigateTo] - The optional route to navigate to after the alert is hidden. If not provided, no navigation occurs.
 * @param {Function} [options.onAlertHidden] - An optional callback function to be executed once the alert is hidden (after the timeout).
 * 
 * @example
 * triggerAlert({
 *   message: "User created successfully!",
 *   isError: false, // Success alert
 *   navigateTo: "/dashboard", // Navigate to dashboard after alert
 *   onAlertHidden: () => console.log("Alert is now hidden") // Optional callback when alert is hidden
 * });
 *
 * 
 * @returns {Object} - Returns `alertTag` (the JSX for the alert) and `triggerAlert` (a function to trigger the alert).
 */

interface UseAlertTagProps {
  timeout?: number;
}

interface TriggerAlertOptions {
  message: string;
  isError?: boolean;
  navigateTo?: string;
  onAlertHidden?: () => void;  // Optional callback when alert is hidden
}

export const useAlertTag = ({ timeout = 3000 }: UseAlertTagProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | undefined>(undefined);
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();

  // Function to trigger the alert
  const triggerAlert = useCallback(({ message, isError = false, navigateTo, onAlertHidden }: TriggerAlertOptions) => {
    setAlertMessage(message);
    setIsError(isError);
    setIsVisible(true);

    // Automatically hide the alert after the timeout
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (navigateTo) {
        navigate(navigateTo);
      }
      if (onAlertHidden) {
        onAlertHidden();
      }
    }, timeout);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [navigate, timeout]);

  // Return the alert tag JSX only when visible
  const alertTag = isVisible ? (
    <div
      className="absolute top-[108px] left-1/2 w-[336px] h-[77px] transform -translate-x-1/2 rounded-[20px] bg-[#FFFFFF]/90 flex items-center"
    >
      <p className={`text-xl ${isError ? "text-red-500" : "text-[#235DB5]"} ml-[16px] mr-[60px] overflow-hidden text-ellipsis`}>
        {alertMessage}
      </p>
      {isError ? (
        <IoClose className="w-[43px] h-[43px] text-white bg-[#EF7221] border-none rounded-full absolute top-[17px] right-[21px]" />
      ) : (
        <IoCheckmark className="w-[43px] h-[43px] text-white bg-[#65C55D] border-none rounded-full absolute top-[17px] right-[21px]" />
      )}
    </div>
  ) : null;

  return { alertTag, triggerAlert };
};
