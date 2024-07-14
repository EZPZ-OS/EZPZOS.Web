import React, {useState} from 'react'

import Notice from '../Notice'
import bg from './images/background_bg.png'
import avatar from './images/avatar_icon.png'
import eat_icon from './images/eat_icon.png'
import booking_icon from './images/booking_icon.png'
import pick_up_icon from './images/pick_up_icon.png'
import bottom_logo from './images/logo_pro_icon.png'

const BHome = () => {
    const [noticeList] = useState([
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

    return (
        <div className='h-screen relative overflow-hidden' style={{'backgroundImage': `url(${bg})`}}>
            <div className='w-full flex flex-col justify-center items-center'>
                <img src={avatar} className='w-[80px] h-[80px] mt-[80px]' alt="avatar"/>
                <p className='text-3xl bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text'>Hi, @Username,</p>
                <p className="text-base bg-gradient-to-r from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text">Would you like to ...</p>
            </div>
            <ul className='flex flex-row items-center justify-around mt-5'>
                <li className='flex flex-col items-center'>
                    <img src={eat_icon} alt="eat_in" className='w-[66px] h-[71px]'/>
                    <span className='text-white text-base'>DINE</span>
                </li>
                <li className='flex flex-col items-center'>
                    <img src={booking_icon} alt="booking" className='w-[66px] h-[71px]'/>
                    <span className='text-white text-base'>BOOK</span>
                </li>
                <li className='flex flex-col items-center'>
                    <img src={pick_up_icon} alt="pick_up" className='w-[66px] h-[71px]'/>
                    <span className='text-white text-base'>PICK-UP</span>
                </li>
            </ul>
            <div className='flex flex-col items-center mt-4'>
                {
                    noticeList.map((item, index)=>{
                        return <Notice key={index} title={item.title} content={item.content}/>
                    })
                }
            </div>
            <img alt="b_logo" src={bottom_logo} className='absolute left-0 right-0 m-auto bottom-3'/>
        </div>
    )
}

export default BHome