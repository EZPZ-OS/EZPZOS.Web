import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import Dish from '../../Assets/Images/Dish.png'

const DishList = () => {

    const handleGoBack = () => {
        // go back
    }

    const handleAddDish = ()=>{
        // go to add dish page
    }

    const handleDishDetail = () => {
        // go to dish detail page
    }

    return (
        <div className="relative">
            <div className="sticky top-0 left-0 z-10 w-screen h-[82px] bg-white">
                <div className="absolute left-[28px] top-[28px] flex items-center leading-7 font-bold" onClick={handleGoBack}><FaArrowLeft /><span className="text-base ml-2">Back</span></div>
                <span className="absolute right-[20px] top-[32px] leading-9 bg-orange-500 text-white text-base px-2 rounded" onClick={handleAddDish}>Add New</span>
            </div>
            <div className="h-[calc(100vh+185px)] ml-7 mr-7">
                <h2 className="leading-6 text-gray-500 font-bold text-xl">Available</h2>
                <ul className="mt-3">
                    <li className="h-28 mb-2 rounded-lg flex items-center" onClick={handleDishDetail}>
                        <img className="w-28 h-28 rounded-lg" src={Dish} alt="dish_img"/>
                        <div className="flex-1 flex-row ml-2">
                            <h3 className="font-bold text-base leading-none mt-1 mb-1">Stewed beef with potatos</h3>
                            <span className="h-[15px] text-sm rounded-md bg-gradient-to-r from-[#a72353b3] to-[#DC4200] opacity-90 px-2 py-1 text-white">No.1 ordered</span>
                            <div className="leading-none mt-1 mb-1 text-gray-500 mr-3 text-ellipsis overflow-hidden line-clamp-2">This is the description. This is the description.This is the description.</div>
                            <span className="font-bold text-gray-600">$17.5</span>
                        </div>
                        <MdArrowForwardIos />
                    </li>
                    <li className="h-28 mb-2 rounded-lg flex items-center">
                        <img className="w-28 h-28 rounded-lg" src={Dish} alt="dish_img"/>
                        <div className="flex-1 flex-row ml-2">
                            <h3 className="font-bold text-base leading-none mt-1 mb-1">Stewed beef with potatos</h3>
                            <span className="h-[15px] text-sm rounded-md bg-gradient-to-r from-[#a72353b3] to-[#DC4200] opacity-90 px-2 py-1 text-white">No.1 ordered</span>
                            <div className="leading-none mt-1 mb-1 text-gray-500 mr-3 text-ellipsis overflow-hidden line-clamp-2">This is the description. This is the description.This is the description.</div>
                            <span className="font-bold text-gray-600">$17.5</span>
                        </div>
                        <MdArrowForwardIos />
                    </li>
                    <li className="h-28 mb-2 rounded-lg flex items-center">
                        <img className="w-28 h-28 rounded-lg" src={Dish} alt="dish_img"/>
                        <div className="flex-1 flex-row ml-2">
                            <h3 className="font-bold text-base leading-none mt-1 mb-1">Stewed beef with potatos</h3>
                            <span className="h-[15px] text-sm rounded-md bg-gradient-to-r from-[#a72353b3] to-[#DC4200] opacity-90 px-2 py-1 text-white">No.1 ordered</span>
                            <div className="leading-none mt-1 mb-1 text-gray-500 mr-3 text-ellipsis overflow-hidden line-clamp-2">This is the description. This is the description.This is the description.</div>
                            <span className="font-bold text-gray-600">$17.5</span>
                        </div>
                        <MdArrowForwardIos />
                    </li>
                </ul>
                <h2 className="leading-6 text-gray-500 font-bold text-xl">Unavailable</h2>
                <ul className="mt-3">
                    <li className="h-28 mb-2 rounded-lg flex items-center">
                        <img className="w-28 h-28 rounded-lg" src={Dish} alt="dish_img"/>
                        <div className="flex-1 flex-row ml-2">
                            <h3 className="font-bold text-base leading-none mt-1 mb-1">Stewed beef with potatos</h3>
                            <span className="h-[15px] text-sm rounded-md bg-gradient-to-r from-[#a72353b3] to-[#DC4200] opacity-90 px-2 py-1 text-white">No.1 ordered</span>
                            <div className="leading-none mt-1 mb-1 text-gray-500 mr-3 text-ellipsis overflow-hidden line-clamp-2">This is the description. This is the description.This is the description.</div>
                            <span className="font-bold text-gray-600">$17.5</span>
                        </div>
                        <MdArrowForwardIos />
                    </li>
                    <li className="h-28 mb-2 rounded-lg flex items-center">
                        <img className="w-28 h-28 rounded-lg" src={Dish} alt="dish_img"/>
                        <div className="flex-1 flex-row ml-2">
                            <h3 className="font-bold text-base leading-none mt-1 mb-1">Stewed beef with potatos</h3>
                            <span className="h-[15px] text-sm rounded-md bg-gradient-to-r from-[#a72353b3] to-[#DC4200] opacity-90 px-2 py-1 text-white">No.1 ordered</span>
                            <div className="leading-none mt-1 mb-1 text-gray-500 mr-3 text-ellipsis overflow-hidden line-clamp-2">This is the description. This is the description.This is the description.</div>
                            <span className="font-bold text-gray-600">$17.5</span>
                        </div>
                        <MdArrowForwardIos />
                    </li>
                    <li className="h-28 mb-2 rounded-lg flex items-center">
                        <img className="w-28 h-28 rounded-lg" src={Dish} alt="dish_img"/>
                        <div className="flex-1 flex-row ml-2">
                            <h3 className="font-bold text-base leading-none mt-1 mb-1">Stewed beef with potatos</h3>
                            <span className="h-[15px] text-sm rounded-md bg-gradient-to-r from-[#a72353b3] to-[#DC4200] opacity-90 px-2 py-1 text-white">No.1 ordered</span>
                            <div className="leading-none mt-1 mb-1 text-gray-500 mr-3 text-ellipsis overflow-hidden line-clamp-2">This is the description. This is the description.This is the description.</div>
                            <span className="font-bold text-gray-600">$17.5</span>
                        </div>
                        <MdArrowForwardIos />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DishList