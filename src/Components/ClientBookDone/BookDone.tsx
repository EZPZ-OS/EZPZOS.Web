import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoPersonOutline, IoTimeOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import BottomNavBar from "../BottomNavBar";
import { ClientBookDoneValue } from "ezpzos.core";
import { useNavigate } from "react-router-dom";
/**
 * This is the page of client book done
 *
 * @param props The properties passed to the component.
 * props.people: number type,the number of people that dine in
 * props.date: string type,the date that dine in
 * props.time: string type,the time that dine in
 * props.userName: string type,name of the booking user
 *
 * BacktoHome Button: Once clicked, it returns to home page
 */

export default function BookDone(props: { people: number; date: string; time: string; userName: string }) {
	const { BookDone, BookSuccess, RestaurantAddress } = ClientBookDoneValue;
	const { people, date, time, userName } = props;
	const [orderPeople, setOrderPeople] = useState(0);
	const [orderDate, setOrderDate] = useState("");
	const [orderTime, setOrderTime] = useState("");
	const [orderUser, setOrderUser] = useState("");

	const navigate = useNavigate();
	const returnHomePage = () => {
		navigate("/");
	};

	useEffect(() => {
		let orderInfoStorage: string | null = localStorage.getItem("orderInfo");
		let orderInfo: any = JSON.parse(orderInfoStorage!);
		setOrderPeople(orderInfo.partySize);
		setOrderDate(orderInfo.date);
		setOrderTime(orderInfo.time);
		let userStorage: string | null = localStorage.getItem("user");
		let user: any = JSON.parse(userStorage!);
		setOrderUser(user.Username);
	}, []);

	return (
		<div className="h-[845px] bg-gradient-to-b from-[#E78B57] to-[#4EC1E5]">
			<div className="absolute top-[98px] left-0 right-0 m-auto bg-[#F3F3F3] w-[391px] h-[731px] rounded-[15px]">
				<div className="mt-[86px] flex justify-center">
					<div className="w-[58px] h-[58px] rounded-full bg-[#65C55D] flex justify-center items-center">
						<FaCheck className="text-white  text-[40px] font-light" />
					</div>
				</div>
				<div className="mt-[30px] ml-8 mr-8">
					<div className="text-[#FB6300] font-[800] text-[24px] text-center">{BookDone}</div>
					<div className="text-[#FB6300] font-[400] text-[15px]">{BookSuccess}</div>
					<ul className="mt-[26px] text-[16px] font-[700]">
						<li className="flex items-center mb-[15px]">
							<IoPersonOutline /> <div className="ml-[25px]">{orderPeople} People</div>
						</li>
						<li className="flex items-center mb-[15px]">
							<FaCalendarAlt /> <div className="ml-[25px]">{orderDate}</div>
						</li>
						<li className="flex items-center mb-[15px]">
							<IoTimeOutline /> <div className="ml-[25px]">{orderTime}</div>
						</li>
						<li className="mb-[15px]">Username: {orderUser}</li>
						<li>Address: {RestaurantAddress}</li>
					</ul>
				</div>
				{/**Back to Home Button */}
				<div className="mt-[80px] flex justify-center   h-[47px]  text-white font-[20px]">
					<div
						className=" flex justify-center items-center bg-gradient-to-r from-[#EF7221] to-[#FF6514] w-[334px] h-[47px] rounded-[3px]"
						onClick={returnHomePage}
					>
						Back to HOME
					</div>
				</div>
				{/** BottomNavBar */}
			</div>
			<BottomNavBar isClient={true} />
		</div>
	);
}
