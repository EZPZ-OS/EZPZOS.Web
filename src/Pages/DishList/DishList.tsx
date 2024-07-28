import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";

import DishItem from '../../Components/DishItem/DishItem';
import Dish from '../../Assets/Images/Dish.png'

const DishList = () => {
    const [availableDish, setAvailableDish] = useState([
        {
            "id": 1,
            "dishName": "Stewed beef with potatos 01",
            "dishImg": Dish,
            "tags": ["No.1 ordered"],
            "desc": "This is the description. This is the description.This is the description.",
            "price": 17.5
        },
        {
            "id": 2,
            "dishName": "Stewed beef with potatos 02",
            "dishImg": Dish,
            "tags": ["No.1 ordered"],
            "desc": "This is the description. This is the description.This is the description.",
            "price": 20.5
        },
        {
            "id": 3,
            "dishName": "Stewed beef with potatos 03",
            "dishImg": Dish,
            "tags": ["No.1 ordered"],
            "desc": "This is the description. This is the description.This is the description.",
            "price": 25.5
        }
    ])

    const [notAvailableDish, setNotAvailableDish] = useState([
        {
            "id": 4,
            "dishName": "Stewed beef with potatos 01",
            "dishImg": Dish,
            "tags": ["No.1 ordered"],
            "desc": "This is the description. This is the description.This is the description.",
            "price": 17.5
        },
        {
            "id": 5,
            "dishName": "Stewed beef with potatos 02",
            "dishImg": Dish,
            "tags": ["No.1 ordered"],
            "desc": "This is the description. This is the description.This is the description.",
            "price": 20.5
        },
        {
            "id": 6,
            "dishName": "Stewed beef with potatos 03",
            "dishImg": Dish,
            "tags": ["No.1 ordered"],
            "desc": "This is the description. This is the description.This is the description.",
            "price": 25.5
        }
    ])

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
                {availableDish.length ? (
                    <>
                        <h2 className="leading-6 text-gray-500 font-bold text-xl">Available</h2>
                        <section className="mt-3">
                            {
                                availableDish.map((item, index)=>{
                                    return (
                                        <DishItem key={index} dishDetail={item} handleDishDetail={handleDishDetail}/>
                                    )
                                })
                            }
                        </section>
                    </>
                ) : ''}
                {
                    notAvailableDish.length ? (
                        <>
                            <h2 className="leading-6 text-gray-500 font-bold text-xl">Unavailable</h2>
                            <section className="mt-3">
                                {
                                    notAvailableDish.map((item, index)=>{
                                        return (
                                            <DishItem key={index} dishDetail={item} handleDishDetail={handleDishDetail}/>
                                        )
                                    })
                                }
                            </section>
                        </>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default DishList