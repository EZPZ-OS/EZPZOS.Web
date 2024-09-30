import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

import DishItem from '../../Components/DishItem/DishItem';
import { GetAllCuisines } from "../../Services/Private/MenuService";

const DishList = () => {
    const [availableDish, setAvailableDish] = useState<any[]>([])
    const [notAvailableDish, setNotAvailableDish] = useState<any[]>([])
    const navigate = useNavigate();

    const handleGoBack = () => {
        // go back
    }

    const handleAddDish = ()=>{
        // go to add dish page
    }

    const handleDishDetail = (id: string) => {
        // go to dish detail page
        navigate('/menu-detail/' + id)
    }

    useEffect(()=>{
        GetAllCuisines().then(res => {
            if(res.status === 200){
                let dishArr = res.data;
                dishArr.forEach((ele : any) => {
                    if(ele.IsAvailable){
                        setAvailableDish((prevArray:any[]) => {
                            return [...prevArray, ele];
                        });
                    }else{
                        setNotAvailableDish((prevArray:any[]) => {
                            return [...prevArray, ele];
                        })
                    }
                })
            }
        })
    }, [])

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