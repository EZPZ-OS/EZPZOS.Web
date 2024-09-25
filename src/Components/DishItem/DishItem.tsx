import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

const DishItem = (props: any) => {
    const {dishDetail, handleDishDetail} = props;
    return (
        <div className="h-28 mb-2 rounded-lg flex items-center" onClick={handleDishDetail}>
            <img className="w-28 h-28 rounded-lg" src={dishDetail.dishImg} alt="dish_img"/>
            <div className="flex-1 flex-row ml-2">
                <h3 className="font-bold text-base leading-none mt-1 mb-1">{dishDetail.dishName}</h3>
                {
                    dishDetail.tags.map((tagItem: string, index: number) => {
                        return (
                            <span key={index} className="h-[15px] text-sm rounded-md bg-gradient-to-r from-[#a72353b3] to-[#DC4200] opacity-90 px-2 py-1 text-white">{tagItem}</span>
                        )
                    })
                }
                <div className="leading-none mt-1 mb-1 text-gray-500 mr-3 text-ellipsis overflow-hidden line-clamp-2">{dishDetail.desc}</div>
                <span className="font-bold text-gray-600">${dishDetail.price}</span>
            </div>
            <MdArrowForwardIos />
        </div>
    )
}

export default DishItem