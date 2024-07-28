import React from 'react'
import Slider from 'react-slick'
import { FaArrowLeftLong} from "react-icons/fa6";

import demoImg01 from '../../Assets/Images/11.png'
import demoImg02 from '../../Assets/Images/London.png'
import demoImg03 from '../../Assets/Images/Newyork.png'

const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinity: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function(i: any) {
        return (
          <span className="w-2 h-2 rounded-circle"></span>
        );
    },
}

const MenuRead = () => {
    
    const goBack = ()=>{
        
    }

    const handleEdit = ()=>{
        
    }

    return (
        <div className="relative pb-5">
            <div className="fixed left-0 top-0 z-10 w-full h-[60px] bg-white">
                <div className="absolute left-5 top-5 w-full h-[38px] text-2xl flex flex-row items-center" onClick={goBack}>
                    <FaArrowLeftLong fontWeight={400}/>
                    <span className="ml-2">Back</span>
                </div>
                <span className="absolute right-[28px] top-[22px] leading-9 bg-orange-500 text-white text-base px-4 rounded" onClick={handleEdit}>Edit</span>
            </div>
            <div className="h-[calc(100vh+7px)] ml-7 mr-7 mt-[68px]">
                <div className="text-sm text-slate-400">This is how your details look to a customer :)</div>
                {/* 轮播图部分 */}
                <div className="w-full h-56 mt-7">
                    <Slider {...settings} className="w-full h-full">
                        <div className="w-full h-56">
                            <img src={demoImg01} className="w-full h-full"/>
                        </div>
                        <div className="w-full h-56">
                            <img src={demoImg02} className="w-full h-full"/>
                        </div>
                        <div className="w-full h-56">
                            <img src={demoImg03} className="w-full h-full"/>
                        </div>
                    </Slider>
                </div>
                <ul className="mt-11 flex flex-row">
                    <li className="h-5 leading-5 text-sm bg-[#FF993C] text-white px-2 rounded-sm mr-1">No.1 ordered</li>
                    <li className="h-5 leading-5 text-sm bg-[#FF993C] text-white px-2 rounded-sm mr-1">No.1 ordered</li>
                </ul>
                <div className="text-[24px] font-bold mt-5 text-[#515151]">Seafood Fried noodles</div>
                <div className="text-[20px] font-bold mt-5 text-text-dishpro-color">Description:</div>
                <div className="mt-3 text-xl text-text-dishpro-color">This is introduction. This is introduction. This is introduction. This is introduction. This is introduction.</div>
                <div className="text-[20px] font-bold mt-5 text-text-dishpro-color">Category: Beef</div>
                <div className="text-[20px] font-bold mt-5 text-text-dishpro-color">Price: $17.5</div>
            </div>
        </div>
    )
}

export default MenuRead