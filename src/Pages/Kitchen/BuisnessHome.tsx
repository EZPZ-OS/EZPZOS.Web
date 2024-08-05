import React from "react";

import BusinessHomeComponent from "../../Components/HomePageRelated/BusinessHomePageRelated/BusinessHomeComponent";
import { DefaultBusinessHomePageValues } from "ezpzos.core";

export interface BusienssPageValuesProp {
	DefaultBusinessHomePageValues: {
		BusienssHomePageMockData: {
			IsLoggedIn: Boolean;
			HomePageButtonList: any[];
			NotificationList: any[];
		};
	};
}
const BusinessHome: React.FC<BusienssPageValuesProp> = ({}) => {
	return (
		<div>
			<div className="flex h-screen w-screen bg-[url('./Assets/Images/MainPageBackgroundImage.png')] bg-cover relative overflow-hidden">
				<div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
					<div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
						<BusinessHomeComponent DefaultBusinessHomePageValues={DefaultBusinessHomePageValues} />
					</div>
				</div>
			</div>

			{/* <Footer /> */}
		</div>
	);
};

export default BusinessHome;
