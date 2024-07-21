import React from 'react'
import { SlArrowRight } from "react-icons/sl";

import NotificationHorn from "../../Assets/Images/NotificationHorn.png"

const HomePageNotification = (props: any) => {
    return (
        <div className='w-full h-16 mb-1 rounded-xl border-[0.1px] border-[#ADA0A0]  bg-[#7774746e] flex flex-row items-center'>
           <img src={NotificationHorn} alt="horn_icon" className='w-6 h-6 ml-3'/>

            <div className='flex-1 ml-3 mr-3'>
                <p className='text-white text-sm'>{props.title}</p>
                <p className='text-white text-sm'>{props.content}</p>
            </div>
            <SlArrowRight className='mr-3 text-white'/>
        </div>
    )
}

export default HomePageNotification