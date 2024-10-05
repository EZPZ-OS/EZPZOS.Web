import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import { GrFormSubtract } from "react-icons/gr";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { GetCuisineById } from "../../Services/Private/MenuService";

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
    const params = useParams();
    const navigate = useNavigate();
    const [proNum, setProNum] = useState(1)
    const [price, setPrice] = useState(0)
    const [isSpicy, setIsSpicy] = useState(true)
    const [options, setOptions] = useState([
        {'Extra': [{'title': 'Add Sliced Beef', 'value': true}, {'title': 'Add Stir-fired Egg and Romato', 'value': false}]},
        {'Noodle': [{'title': 'Add Flat Noodle', 'value': false}]}
    ])
    const [singleDishPrice, setSingleDishPrice] = useState(0);
    const [dishName, setDishName] = useState('');
    const [dishDesc, setDishDesc] = useState('');
    const [category, setCategory] = useState('');

    useEffect(()=>{
        setPrice(proNum * singleDishPrice)
    }, [proNum])

    useEffect(()=>{
        let dishId = params.id;
        GetCuisineById(dishId).then(res => {
            if(res.status === 200){
                setDishName(res.data.Name)
                setDishDesc(res.data.Description)
                setCategory(res.data.Category)
                setSingleDishPrice(res.data.Price)
                setPrice(proNum * res.data.Price)
            }
        })
    }, [])

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

    const CustomToast = () => {
        return (
            <div>
                <h2>Success</h2>
                <p>Add shopping cart successfully!</p>
            </div>
        )
    }
    const handleToast = () => {
        toast.success(<CustomToast />, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            progress: undefined
        })
    }
    const handleAddCart = () => {
        // add cart
        // store data into localstorage
        // user_id, dish_id, dish_name, dish_number, dish_price
        let userStorage: string|null = localStorage.getItem('user');
        let user: any = JSON.parse(userStorage!);
        let dishObject = {
            "user_id": user.Id,
            "dish_id": params.id,
            "dish_name": dishName,
            "dish_number": proNum,
            "dish_price": price,
            "dish_per_price": singleDishPrice
        }

        let cartObj: string|null = localStorage.getItem('cartObj');
        if(cartObj === null){
            localStorage.setItem('cartObj', JSON.stringify([dishObject]))
        }else{
            // first, filter dishId
            let cartContentArr = JSON.parse(cartObj);
            let flag = false;
            cartContentArr.forEach((item: any) => {
                if(item.user_id === user.Id && item.dish_id === params.id){
                    flag = true;
                    item.dish_number += proNum;
                    item.dish_price += price;
                }
            })
            if(!flag){
                cartContentArr.push(dishObject);
            }
            localStorage.setItem('cartObj', JSON.stringify(cartContentArr))
        }
        // show toast hint
        handleToast();
    }

    const handleOptions = (key: number, valIndex: number) => {
        let copyOptions = JSON.parse(JSON.stringify(options))
        let copyKey = Object.keys(copyOptions[key])[0]
        let targetVal = copyOptions[key][copyKey][valIndex]
        targetVal.value = !targetVal.value;
        setOptions(copyOptions)
    }

    const goBack = ()=>{
        navigate('/menu-list')
    }

    return (
        <div className="relative bg-gradient-to-b from-[#FFFFFF] from-65% to-[#E5D9D3] to-100% pb-5">
            <div className="fixed left-0 top-0 z-10 w-full h-[60px] bg-white">
                <div className="absolute left-5 top-5 w-full h-[38px] text-2xl flex flex-row items-center" onClick={goBack}>
                    <FaArrowLeftLong fontWeight={400}/>
                    <span className="ml-2">Back</span>
                </div>
            </div>
            <div className="ml-7 mr-7 mt-[68px]">
                {/* slideshow part */}
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
                <div className="text-[24px] font-bold mt-5 text-text-dishpro-color [text-shadow:_0_3px_2px_rgb(81_81_81_/_40%)]">{dishName}</div>
                <ul className="mt-2 flex flex-row">
                    <li className="h-5 leading-5 text-sm text-[#5A4F4F] px-2 bg-gradient-to-r from-[#F279A5] to-[#FA986E] opacity-90 rounded-sm mr-1 shadow-tag">{category}</li>
                </ul>
                <div className="mt-3 text-text-dishpro-color text-xl [text-shadow:_0_3px_2px_rgb(81_81_81_/_40%)]">{dishDesc}</div>
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
            <ToastContainer />
        </div>
    )
}

export default DishProduct