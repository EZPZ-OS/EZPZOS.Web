import React from "react";

import BusinessHomeComponent from "../../Components/HomePageRelated/BusinessHomePageRelated/BusinessHomeComponent";

export interface BusinessHomePageDataProp {
	data?: {
		isLoggedIn: Boolean;
		homePageButtonList: any[];
		notificationList: any[];
	};
}
const BusinessHome: React.FC<BusinessHomePageDataProp> = ({
	data = {
		isLoggedIn: false,
		homePageButtonList: [
			{
				img: "DineInIcon.png",
				title: "KITCHEN"
			},
			{
				img: "BookingIcon.png",
				title: "ADMIN"
			}
		],
		notificationList: [
			{
				title: "Reports",
				content: "You have a report!"
			},
			{
				title: "Booking notification",
				content: "You have 4 new bookings!"
			},
			{
				title: "Data",
				content: "You have 6 tables active!"
			}
		]
	}
}) => {
	return (
		<div>

			<div className="flex h-screen w-screen bg-[url('./Assets/Images/MainPageBackgroundImage.png')] bg-cover relative overflow-hidden">
				<div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
					<div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
						<BusinessHomeComponent data={data} />

					</div>
				</div>
			</div>

			{/* <Footer /> */}
		</div>
	);
};

export default BusinessHome;
