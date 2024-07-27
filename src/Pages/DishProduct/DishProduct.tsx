import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import { GrFormSubtract } from "react-icons/gr";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

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

const DishProduct = () => {
    console.log('render=======')
    const singleDishPrice = 22.0
    const [proNum, setProNum] = useState(1)
    const [price, setPrice] = useState(0)
    const [isSpicy, setIsSpicy] = useState(true)
    const [options, setOptions] = useState([
        {'Extra': [{'title': 'Add Sliced Beef', 'value': true}, {'title': 'Add Stir-fired Egg and Romato', 'value': false}]},
        {'Noodle': [{'title': 'Add Flat Noodle', 'value': false}]}
    ])

    useEffect(()=>{
        setPrice(proNum * singleDishPrice)
    }, [proNum])

    const handProNum = (flag: string) => {
        if (flag === 'substract'){
            if(proNum === 1) {
                return
            }else{
                setProNum(proNum - 1)
            }
        } else {
            setProNum(proNum + 1)
        }
    }

    const handleAddCart = () => {

    }

    const handleOptions = (key: number, valIndex: number) => {
        let copyOptions = JSON.parse(JSON.stringify(options))
        let copyKey = Object.keys(copyOptions[key])[0]
        let targetVal = copyOptions[key][copyKey][valIndex]
        targetVal.value = !targetVal.value;
        setOptions(copyOptions)
    }

    return (
        <div className="relative bg-white pb-5">
            <div className="fixed left-0 top-0 z-10 w-full h-[60px] bg-white">
                <div className="absolute left-5 top-5 w-full h-[38px] text-2xl flex flex-row items-center">
                    <FaArrowLeftLong fontWeight={400}/>
                    <span className="ml-2">Back</span>
                </div>
            </div>
            <div className="ml-5 mr-5 mt-[68px]">
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
                <div className="text-[24px] font-bold mt-5 text-text-dishpro-color [text-shadow:_0_3px_2px_rgb(81_81_81_/_40%)]">Seafood Fried noodles</div>
                <ul className="mt-2 flex flex-row">
                    <li className="h-5 leading-5 text-sm text-[#5A4F4F] px-2 bg-gradient-to-r from-[#F279A5] to-[#FA986E] opacity-90 rounded-sm mr-1 shadow-tag">gluten free</li>
                    <li className="h-5 leading-5 text-sm text-[#5A4F4F] px-2 bg-gradient-to-r from-[#F279A5] to-[#FA986E] opacity-90 rounded-sm mr-1 shadow-tag">Seafood</li>
                </ul>
                <div className="mt-3 text-text-dishpro-color text-xl [text-shadow:_0_3px_2px_rgb(81_81_81_/_40%)]">This is introduction. This is introduction. This is introduction. This is introduction. This is introduction.</div>
                <div className="mt-3">
                    <h2 className="text-text-dishpro-color font-bold">Choose flavor:</h2>
                    <div className="mt-1 flex flex-row items-center">
                        <span className={`w-[112px] h-[32px] leading-8 text-center ${isSpicy ? `bg-red-600 text-white` : `bg-[#C1B3AC] text-[#867777]`} rounded-sm mr-3`} onClick={()=>setIsSpicy(true)}>Spicy</span>
                        <span className={`w-[112px] h-[32px] leading-8 text-center ${isSpicy ? `bg-[#C1B3AC] text-[#867777]` : `bg-red-600 text-white`} rounded-sm`} onClick={()=>setIsSpicy(false)}>Not Spicy</span>
                    </div>
                </div>

                {
                    options.map((item, key) => {
                        return (
                            <div key={key} className="mt-3">
                                <h2 className="text-text-dishpro-color font-bold">{Object.keys(item)} option:</h2>
                                <div className="mt-1 text-text-dishpro-color">
                                    {
                                        Object.values(item).map((optionItem,index)=>{
                                            return (
                                                optionItem.map((optItem: any, optIndex: number)=>{
                                                    return (
                                                        <div key={optIndex} className="h-7 flex flex-row items-center justify-normal" onClick={()=>handleOptions(key, optIndex)}>
                                                            {optItem.value ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
                                                            <span className="ml-2">{optItem.title}</span>
                                                        </div>
                                                    )
                                                })
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div className="mt-3">
                    <h2 className="text-text-dishpro-color font-bold">Special instructions:</h2>
                    <textarea className="w-full h-[50px] mt-1 px-2 shadow-textarea-inset focus:outline-none" placeholder='Extra spicy'></textarea>
                </div>
                <div className='h-[3px] bg-[#E2DEDE] mt-5'></div>
                <div className="w-10/12 mt-3 mx-auto flex flex-row justify-between items-center h-8">
                    <span className="w-2/4 h-full text-text-dishpro-color font-bold text-[20px]">${price}</span>
                    <div className="w-2/4 h-full flex flex-row items-center justify-around">
                        <span className="w-8 h-8 leading-8 flex items-center justify-center rounded-circle bg-gradient-to-b from-[#FF993C] to-[#DC4200] opacity-90" onClick={() => handProNum('substract')}>
                            <GrFormSubtract style={{'color': '#fff'}}/>
                        </span>
                        <span className="flex-1 text-center text-text-dishpro-color font-bold text-[20px]">{proNum}</span>
                        <span className="w-8 h-8 leading-8 flex items-center justify-center rounded-circle bg-gradient-to-b from-[#FF993C] to-[#DC4200] opacity-90" onClick={() => handProNum('add')}>
                            <FaPlus style={{'color': '#fff'}}/>
                        </span>
                    </div>
                </div>
                <div className="w-10/12 h-12 leading-[48px] mx-auto bg-gradient-to-r from-[#EF7221] to-[#DC4200] opacity-90 rounded-2xl mt-3 text-center text-white font-bold text-xl" onClick={handleAddCart}>Add to cart</div>
            </div>
        </div>
    )
}

export default DishProduct