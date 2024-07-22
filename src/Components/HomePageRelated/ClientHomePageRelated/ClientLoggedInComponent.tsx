import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/Logo.png";
import ClientAvatar from "../../../Assets/Icons/ClientAvatar.png";
import LogoWithName from "../../../Assets/Images/LogoWithName.png";
import HomePageNotification from "../HomePageNotification";
import React, {useState} from 'react';
import HomePageButtons from "../HomePageButtons";
import { HomePageDataProp } from "../../../pages/Home";



const ClientLoggedInComponent: React.FC<HomePageDataProp> = ({
   data = {
    homepagelist:[
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
], notificationlist:[
  {
    title: 'Vouchers',
    content: 'You have unused vouchers!'
},
{
    title: 'Vouchers',
    content: 'You have unused vouchers!'
}

]}

}) => {

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img
        src={ClientAvatar}
        className="w-[110px] h-[110px] mt-32"
        alt="logo"
      />
      <p className="text-3xl font-black	mt-8 bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text">
        Hi @Username,
      </p>
      <p className="text-sm font-bold bg-gradient-to-r from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text mt-1">
        Would you like to...
      </p>
      <div className="flex gap-16">
        {data.homepagelist.map((data,index)=>{
          return <HomePageButtons key={index} img={data.img} title={data.title} />
        })}
        {/* <ClientHomePageButtons {...(icons = icons)} /> */}
      </div>

      
      <div className='flex flex-col items-center w-4/5 mt-6'>
                {
                   data.notificationlist.map((data, index)=>{
                        return <HomePageNotification  key={index} title={data.title} content={data.content}/>
                    })
                }
            </div>

          
      <div>
        <img
          src={LogoWithName}
          className="mt-24"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default ClientLoggedInComponent;
