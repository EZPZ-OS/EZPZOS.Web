import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import ClientAvatar from '../../Assets/Icons/ClientAvatar.png'
import OrdersIcon from '../../Assets/Icons/OrdersIcon.png'
import VouchersIcon from '../../Assets/Icons/VouchersIcon.png'

const ProfileInfo = () => {
    return (
        <div className="relative w-full h-screen bg-grey-gradient">
            <div className="h-32 w-full bg-orange-gradient"></div>
            <div className="absolute left-0 right-0 top-16 m-auto w-[107px] h-[107px] bg-white rounded-full">
                <img src={ClientAvatar} />
            </div>
            <div className="absolute left-0 right-0 top-44 m-auto flex flex-row justify-center items-center font-bold text-base">
                <span>Username</span>
                <MdKeyboardArrowRight />
            </div>
            <div className="bg-white ml-4 mr-4 h-[calc(100vh_-_300px)] mt-20 rounded-md">
                <ul className="flex flex-row items-center h-44 border-b-4 border-[#E2DEDE] ">
                    <li className="flex flex-col items-center justify-center w-[102px] h-[110px] rounded bg-[#E8E4E4] ml-8 mr-2">
                        <img className="w-[44px] h-[50px]" src={OrdersIcon}/>
                        <span className="font-bold">Orders</span>
                    </li>
                    <li className="flex flex-col items-center justify-center w-[102px] h-[110px] rounded bg-[#E8E4E4] mr-2">
                        <img className="w-[44px] h-[50px]" src={VouchersIcon}/>
                        <span className="font-bold">Vouchers</span>
                    </li>
                </ul>
                <ul className="ml-6 mt-4">
                    <li className="leading-8">Help</li>
                    <li className="leading-8">Language</li>
                    <li className="leading-8">Scan</li>
                    <li className="leading-8">Company join</li>
                    <li className="leading-8">E-Receipt</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo