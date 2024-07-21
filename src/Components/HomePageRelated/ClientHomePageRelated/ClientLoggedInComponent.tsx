import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/Logo.png";
import ClientHomePageButtons from "../ClientHomePageButtons";
import ClientAvatar from "../../../Assets/Icons/ClientAvatar.png";
import LogoWithName from "../../../Assets/Images/LogoWithName.png";
import HomePageNotification from "../HomePageNotification";
import React, {useState} from 'react';
import HomePageButtons from "../HomePageButtons";


export interface notificationProps{

}

export interface iconsProp {
  icons?: string[];
}
const ClientLoggedInComponent: React.FC<iconsProp> = ({
  icons = ["DineInIcon.png", "TakeawayIcon.png", "BookingIcon.png"],
}) => {


    const notoficationList =[
        {
            title: 'Vouchers',
            content: 'You have unused vouchers!'
        },
        {
            title: 'Vouchers',
            content: 'You have unused vouchers!'
        }
    ]

    const ClientHomePageButtonList = [
      {
          img: '../../Assets/Icons/TakeawayIcon.png',
          title: 'TAKE AWAY'
      },
      {
          img: '../../Assets/Icons/BookingIcon.png',
          title: 'BOOK'
      }
  ]


    
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
      <div className="flex">
        {ClientHomePageButtonList.map((data,index)=>{
          return <HomePageButtons key={index} img={data.img} title={data.title} />
        })}
        {/* <ClientHomePageButtons {...(icons = icons)} /> */}
      </div>

      
      <div className='flex flex-col items-center w-4/5 mt-6'>
                {
                   notoficationList.map((data, index)=>{
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
