import React from 'react'
import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import { GrFormSubtract } from "react-icons/gr";

const DishProduct = () => {
    return (
        <div className="relative bg-white pb-20">
            <div className="fixed left-5 top-5 w-full h-[38px] bg-white text-2xl flex flex-row items-center">
                <FaArrowLeftLong fontWeight={400}/>
                <span className="ml-2">Back</span>
            </div>
            <div className="h-screen ml-5 mr-5 mt-[68px]">
                {/* 轮播图部分 */}
                <div className="w-full h-56 bg-red-300"></div>
                <div className="text-[24px] font-bold mt-4 text-text-dishpro-color">Seafood Fried noodles</div>
                <ul className="mt-2 flex flex-row">
                    <li className="h-5 leading-5 text-sm text-[#5A4F4F] px-2 bg-gradient-to-r from-[#F279A5] to-[#FA986E] opacity-90 rounded-sm mr-1">gluten free</li>
                    <li className="h-5 leading-5 text-sm text-[#5A4F4F] px-2 bg-gradient-to-r from-[#F279A5] to-[#FA986E] opacity-90 rounded-sm mr-1">Seafood</li>
                </ul>
                <div className="mt-3 text-text-dishpro-color text-xl">This is introduction. This is introduction. This is introduction. This is introduction. This is introduction.</div>
                <div className="mt-3">
                    <h2 className="text-text-dishpro-color font-bold">Choose flavor:</h2>
                    <div className="mt-1 flex flex-row items-center">
                        <span className="w-[112px] h-[32px] leading-8 text-center text-white bg-red-600 rounded-sm mr-3">Spicy</span>
                        <span className="w-[112px] h-[32px] leading-8 text-center text-[#867777] bg-[#C1B3AC] rounded-sm">Not Spicy</span>
                    </div>
                </div>
                <div className="mt-3">
                    <h2 className="text-text-dishpro-color font-bold">Extra option:</h2>
                    <div className="mt-1 flex flex-row items-center">
                        
                    </div>
                </div>
                <div className="mt-3">
                    <h2 className="text-text-dishpro-color font-bold">Noodle option:</h2>
                    <div className="mt-1 flex flex-row items-center">
                        
                    </div>
                </div>
                <div className="mt-3">
                    <h2 className="text-text-dishpro-color font-bold">Special instructions:</h2>
                    <textarea className="w-full h-[50px] mt-1" placeholder='Extra spicy'></textarea>
                </div>
                <div className='h-[3px] bg-[#E2DEDE] mt-5'></div>
                <div className="w-10/12 mt-3 mx-auto flex flex-row justify-between items-center h-8">
                    <span className="w-2/4 h-full">$22.0</span>
                    <div className="w-2/4 h-full flex flex-row items-center justify-around">
                        <span className="w-8 h-8 leading-8 flex items-center justify-center rounded-circle bg-gradient-to-b from-[#FF993C] to-[#DC4200] opacity-90">
                            <GrFormSubtract style={{'color': '#fff'}}/>
                        </span>
                        <span className="flex-1 text-center">1</span>
                        <span className="w-8 h-8 leading-8 flex items-center justify-center rounded-circle bg-gradient-to-b from-[#FF993C] to-[#DC4200] opacity-90">
                            <FaPlus style={{'color': '#fff'}}/>
                        </span>
                    </div>
                </div>
                <div className="w-10/12 h-12 leading-[48px] mx-auto bg-gradient-to-r from-[#EF7221] to-[#DC4200] opacity-90 rounded-2xl mt-3 text-center text-white font-bold text-xl">Add to cart</div>
            </div>
        </div>
    )
}

export default DishProduct