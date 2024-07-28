import React from "react";

import ClientHomeComponent from "../Components/HomePageRelated/ClientHomePageRelated/ClientHomeComponent";


export interface ClientHomePageDataProp {
  data?: {
    isLoggedIn:Boolean,
    homePageButtonList:any[],
    notificationList:any[]
  };

}
const Home:React.FC<ClientHomePageDataProp>=({ 
  data = {
  isLoggedIn:false,
  homePageButtonList:[
  {
    img: 'DineInIcon.png',
    title: 'DINE IN'
},
{
    img: 'BookingIcon.png',
    title: 'BOOK'
},
{
    img: 'TakeawayIcon.png',
    title: 'TAKE AWAY'
}
], notificationList:[
{
  title: 'Vouchers',
  content: 'You have unused vouchers!'
},
{
  title: 'Vouchers',
  content: 'You have unused vouchers!'
}

]
}
}
)=>{

  return (
    <div>


      <div className="flex h-screen w-screen bg-[url('./Assets/Images/MainPageBackgroundImage.png')] bg-cover relative overflow-hidden">
      <div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
        <div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">

        <ClientHomeComponent data={data} />



      

        </div>
      </div>
    </div>


            

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
