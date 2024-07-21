import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/Logo.png"
import BusinessHomePageButtons from "../BusinessHomePageButtons";


import ClientHomePageButtons from "../ClientHomePageButtons";
import BusinessAvatar from "../../../Assets/Icons/BusinessAvatar.png";
import LogoWithName from "../../../Assets/Images/LogoWithName.png";
import HomePageNotification from "../HomePageNotification";
import React, {useState} from 'react';

const BusinessLoggedInComponent =()=>{
 const [notoficationList] = useState([
        {
            title: 'Reports',
            content: 'You have a report!'
        },
        {
            title: 'Booking notification',
            content: 'You have 4 new bookings!'
        },
        {
            title: 'Data',
            content: 'You have 6 tables active!'
        }
    ])


    return(
    
    <div className="w-full flex flex-col justify-center items-center">
    
    <img
        src={BusinessAvatar}
        className="w-[110px] h-[110px] mt-32"
        alt="logo"
      />
<p className="text-3xl font-black	mt-8 bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text">
        Hi @Username,
      </p>
      <p className="text-sm font-bold bg-gradient-to-r from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text mt-1">
        Would you like to...
      </p>      
<BusinessHomePageButtons/>
<div className='flex flex-col items-center w-4/5 mt-6'>
                {
                   notoficationList.map((item, index)=>{
                        return <HomePageNotification  key={index} title={item.title} content={item.content}/>
                    })
                }
            </div>
        <img
          src={LogoWithName}
          className="mt-8"
          alt="logo"
        />
        </div>
    )
}

export default BusinessLoggedInComponent;