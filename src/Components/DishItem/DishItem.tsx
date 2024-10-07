import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import Dish from '../../Assets/Images/dish.png'

const DishItem = (props: any) => {
    const {dishDetail, handleDishDetail} = props;
    return (
        <div className="h-28 mb-2 rounded-lg flex items-center" onClick={() => handleDishDetail(dishDetail.Id)}>
            <img className="w-28 h-28 rounded-lg" src={dishDetail.Image} alt="dish_img"/>
            <div className="flex-1 flex-row ml-2">
                <h3 className="font-bold text-base leading-none mt-1 mb-1">{dishDetail.Name}</h3>
                <span className="h-[15px] text-sm rounded-md bg-gradient-to-r from-[#a72353b3] to-[#DC4200] opacity-90 px-2 py-1 text-white">{dishDetail.Category}</span>
                {/* {
                    dishDetail.tags.map((tagItem: string, index: number) => {
                        return (
                            <span key={index} className="h-[15px] text-sm rounded-md bg-gradient-to-r from-[#a72353b3] to-[#DC4200] opacity-90 px-2 py-1 text-white">{tagItem}</span>
                        )
                    })
                } */}
                <div className="leading-none mt-1 mb-1 text-gray-500 mr-3 text-ellipsis overflow-hidden line-clamp-2">{dishDetail.Description}</div>
                <span className="font-bold text-gray-600">${dishDetail.Price}</span>
            </div>
            <MdArrowForwardIos />
        </div>
    )
}

export default DishItem