import React, {useState} from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { DefaultPastOrderContent } from "ezpzos.core";

import SinglePastOrder from '../../Components/SinglePastOrder/SinglePastOrder'

const PastOrder = () => {
    const [oldOrder, setOldOrder] = useState([
        {
            "orderId": "1",
            "title": "DemoData sichuan Cuisine",
            "itemNum": 5,
            "price": "27.87",
            "date": "2024-06-27",
            "status": "Completed"
        },
        {
            "orderId": "2",
            "title": "Hot pot",
            "itemNum": 6,
            "price": "37.87",
            "date": "2024-06-28",
            "status": "Completed"
        }
    ])

    function goBack(){

    }

    function handleReOrder(orderId: string){
        // request api -> order again
    }


    return (
        <div className="relative w-full h-screen bg-[#CBC2C2] bg-opacity-35">
            <div className="absolute w-full h-[calc(100vh_-_56px)] bg-white top-[56px] left-0">
                <div className="relative h-[70px]">
                    <div className="absolute left-5 top-5 h-[38px] text-2xl flex flex-row items-center">
                        <FaArrowLeftLong fontWeight={400}/>
                        <span className="ml-2" onClick={goBack}>{DefaultPastOrderContent.Back}</span>
                    </div>
                    <div className="absolute left-0 right-0 top-0 bottom-0 m-auto overflow-hidden color-[#574545] text-xl w-[140px] h-[22px] text-center">{DefaultPastOrderContent.Title}</div>
                </div>
                <p className="text-sm color-[#574545] font-bold ml-5">{DefaultPastOrderContent.More}</p>
                {
                    oldOrder.map((item, index) => {
                        return (
                            <SinglePastOrder key={item.orderId} orderItem={item} handleReOrder={handleReOrder}/>
                        )
                    })
                }
            </div>
        </div>
    )
} 

export default PastOrder