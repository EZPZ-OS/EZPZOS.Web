import { useState, useEffect } from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface AlertTagProps {
	alertMessage: string | undefined;
	isError?: boolean;
	timeout?: number;
	navigateTo?: string; 
}

export const useAlertTag = ({
	alertMessage,
	isError = false,
	timeout = 3000,
	navigateTo,
}: AlertTagProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const navigate = useNavigate(); 

	useEffect(() => {
		if (alertMessage) {
			setIsVisible(true);

			// Automatically hide the alert after the timeout
			const timer = setTimeout(() => {
				setIsVisible(false);
				// Navigate if the navigateTo prop is provided
				if (navigateTo) {
					navigate(navigateTo);
				}
			}, timeout);

			// Cleanup the timer on unmount or if the message changes
			return () => clearTimeout(timer);
		}
	}, [alertMessage, timeout, navigateTo, navigate]);

	// Return the AlertTag component if visible, otherwise null
	if (!isVisible) return null;

	return (
		<div
			className={
				"absolute top-[108px] left-1/2 w-[336px] h-[77px] transform -translate-x-1/2 rounded-[20px] bg-[#FFFFFF]/90 flex items-center"
			}
		>
			<p
				className={`text-xl ${
					isError ? "text-red-500" : "text-[#235DB5]"
				} ml-[16px] mr-[60px] overflow-hidden text-ellipsis`}
			>
				{alertMessage}
			</p>
			{isError ? (
				<IoClose className="w-[43px] h-[43px] text-white bg-[#EF7221] border-none rounded-full absolute top-[17px] right-[21px]" />
			) : (
				<IoCheckmark className="w-[43px] h-[43px] text-white bg-[#65C55D] border-none rounded-full absolute top-[17px] right-[21px]" />
			)}
		</div>
	);
};
