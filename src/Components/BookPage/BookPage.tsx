import React, { useRef, useEffect, useState } from "react";
import BottomNavBar from "../BottomNavBar";
import { IoMdArrowRoundBack } from "react-icons/io";
import PartySizeBlock from "./PartySizeBlock";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleRight } from "react-icons/fa";
import SwiperCore from "swiper";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import getTimeArr from "./timeArr";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import { DefaultBookDonePageValues } from "ezpzos.core";

/**
 * This is the page of BookPage,including size, date and time selection.
 *
 * Back button is done. Once clicked, the page will go to the previous page.
 *
 * Size default is 1, and will be highlighted by clicking.
 * There is also a swiper allow user to swipe.
 * Max size is set 10 by default and it can be changed in Core module.
 * Right move button is also done. Once clicked, the swiper will go to right smoothly.
 *
 * Date is shown by calendar.User can click the date and it would be highlighted once clickedas well.
 *
 * Time slot  is below the calendar.Users can select any time they want to book.
 * Start time, end time and interval is set "10:00", "22:00" and 30(min) by default.They can be set in Core module.
 *
 * Time check function is also done.Once user select past time or  blank time, there is an alert.
 * Continue button is done.
 * 2 data should be sent to backend: partySize:number and partyDateTime:Date.
 * partyDateTime includes both date and time of the booking.
 *
 * by Kino
 * @returns
 */
export default function BookPage() {
	const nav = useNavigate();
	//backfunc is the funtion of the back button
	const backFun = () => [nav(-1)];

	//partySize part
	const partySizeMax: number = DefaultBookDonePageValues.partySizeMax;
	const arr: number[] = Array.from({ length: partySizeMax }, (_, index) => index + 1);
	const swiperRef = useRef<SwiperCore | null>(null);
	const rightMove = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext();
		}
	};
	const [partySize, setPartySize] = useState(1);
	const partySizeClicked = (index: number) => {
		setPartySize(index);
	};
	/**
   *  select date part 
      partyDate is the date of the booking.
      It includes date only and it DOESN'T include the time.
   */

	const [partyDate, setPartyDate] = useState<Date>(new Date());
	const handleDateChange = (newDate: Date) => {
		setPartyDate(newDate);
	};

	//time slot part
	const { startTime, endTime, interval } = DefaultBookDonePageValues;
	const timeArr = getTimeArr(startTime, endTime, interval);
	let timeSwiper = [];
	if (typeof timeArr !== "undefined") {
		for (let i = 0; i < timeArr.length; i += 3) {
			//3 time slots in a row
			timeSwiper.push(timeArr.slice(i, i + 3));
		}
	}
	const timeClickedFun = (time: string) => {
		setPartyTime(time);
	};

	//partyTime is the time of the booking.
	const [partyTime, setPartyTime] = useState("");

	//continue button part
	const goToBookConfirm = () => {
		let partyDateTime = new Date(partyDate);
		partyDateTime.setHours(Number(partyTime.split(":")[0]));
		partyDateTime.setMinutes(Number(partyTime.split(":")[1]));
		//check if the time is blank
		if (partyDateTime instanceof Date && !isNaN(partyDateTime.getTime())) {
			//check if it is the past time
			if (partyDateTime.getTime() - new Date().getTime() > 0) {
				
				localStorage.setItem('orderInfo', JSON.stringify({
					"partySize": partySize,
					"date": (partyDate.getMonth()+1) + '-' + partyDate.getDate() + '-' + partyDate.getFullYear(),
					"time": partyDateTime.getHours() + ":" + partyDateTime.getMinutes()
				}))
				
				//TODO nav to book confirm page, partySize and partyDateTime should be sent to backend
				nav('/booking/success');
			} else {
				alert("Wrong select of past date!");
			}
		} else {
			alert("No select of time!");
		}
	};

	return (
		<div className="h-[845px] bg-gradient-to-b from-[#E78B57] to-[#4EC1E5]">
			<div className="text-white pt-[42px] ml-[24px] text-[20px]">
				<IoMdArrowRoundBack style={{ display: "inline" }} />
				<span onClick={backFun}>Back</span>
			</div>
			<div className="m-auto mt-[15px] rounded-[15px] w-[391px] h-[731px] bg-[#F3F3F3] ">
				<div className="flex flex-col items-center pt-[35px]">
					<div className="text-[#515151] text-[17px]">Party Size</div>
					<div className="mt-[15px] flex w-[319px] relative">
						<Swiper slidesPerView={6} onSwiper={swiper => (swiperRef.current = swiper)} slidesPerGroup={6}>
							{arr.map(index => (
								<SwiperSlide key={index} onClick={() => partySizeClicked(index)}>
									<PartySizeBlock sizeNumber={index} clicked={partySize === index ? true : false} />
								</SwiperSlide>
							))}
						</Swiper>
						<div className="absolute left-[320px] top-[13px]">
							<FaAngleRight className="text-[20px] text-[#D9D6D6]" onClick={rightMove} />
						</div>
					</div>
					<div className="text-[#515151] text-[17px] mt-[20px]">Date</div>
					<Calendar onChange={handleDateChange} value={partyDate} className="mt-[20px]" />
					<div className="text-[#515151] text-[17px] mt-[10px]">Time</div>
					<div className=" h-[100px] w-[350px] flex flex-col justify-around">
						<Swiper
							slidesPerView={3}
							direction="vertical"
							className="h-[100px] w-full"
							scrollbar={{
								hide: true
							}}
							modules={[Scrollbar]}
						>
							{timeSwiper.map((value: string[], ind: number) => {
								return (
									<SwiperSlide className="h-[23px]" key={ind}>
										<div className="flex justify-around">
											{value.map((valueNumber: string, index: number) => {
												return (
													<div 
														key={index}
														className="h-[23px] w-[96px] border border-black rounded-[12px] flex justify-center items-center"
														onClick={() => {
															timeClickedFun(valueNumber);
														}}
														style={
															partyTime === valueNumber
																? { border: "1px solid #F96B6B" }
																: { border: "1px solid black" }
														}
													>
														{valueNumber}
													</div>
												);
											})}
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</div>
				<div className="flex justify-center mt-[25px]">
					<button
						className="w-[293px] h-[41px] text-[20px] text-white rounded-[10px]"
						style={{
							background:
								"linear-gradient(90deg, rgba(239, 114, 33, 0.96) 0%, rgba(255, 101, 20, 0.96) 50%, rgba(220, 66, 0, 0.96) 100%)"
						}}
						onClick={goToBookConfirm}
					>
						Continue
					</button>
				</div>
			</div>
			<BottomNavBar isClient={true} />
		</div>
	);
}
