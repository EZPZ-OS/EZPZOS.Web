import React, { useEffect } from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { hideAlert } from "../Store/AlertSlice";

const AlertTag: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isVisible, message, isError, navigateTo } = useSelector((state: RootState) => state.alert);

	// Automatically hide the alert after a timeout
	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				dispatch(hideAlert());
				// Navigate to the desired URL if navigateTo is not null
				if (navigateTo) {
					navigate(navigateTo);
				}
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [isVisible, navigateTo, navigate, dispatch]);

	if (!isVisible) return null;

	return (
		<div className="fixed top-[108px] left-1/2 w-[336px] h-[77px] transform -translate-x-1/2 rounded-[20px] bg-white/90 flex items-center z-[9999]">
			<p
				className={`text-xl ${
					isError ? "text-red-500" : "text-[#235DB5]"
				} ml-4 mr-16 overflow-hidden text-ellipsis`}
			>
				{message}
			</p>
			{isError ? (
				<IoClose className="w-[43px] h-[43px] text-white bg-[#EF7221] rounded-full absolute top-4 right-5" />
			) : (
				<IoCheckmark className="w-[43px] h-[43px] text-white bg-[#65C55D] rounded-full absolute top-4 right-5" />
			)}
		</div>
	);
};

export default AlertTag;
