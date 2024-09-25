import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { DefaultOrderStatusPageValues, orderListData } from "ezpzos.core";
import { Link } from "react-router-dom";
import unreadyImg from '../../Assets/Images/unready.png'
import preparing from '../../Assets/Images/preparing.png'
import ready from '../../Assets/Images/ready.png'

import OrderList from '../../Components/OrderList/OrderList';

const OrderStatus = () => {
    const [orderState, setOrderState] = useState(2)
    const [subTotal, setSubTotal] = useState('$70')
    const [disCount, setDiscount] = useState('-$8.0')
    const [total, setTotal] = useState('$68.0')

    return (
        <div className="relative w-full h-screen">
            <div className="fixed left-5 top-5 h-[38px] text-2xl flex flex-row items-center">
                <FaArrowLeftLong fontWeight={400} />
                <Link to="/">
                    <span className="ml-2">{DefaultOrderStatusPageValues.Back}</span>
                </Link>
            </div>
            <div className="w-full leading-[60px] bg-nav-bar-gradient mt-[58px] text-center text-xl text-white font-bold">{DefaultOrderStatusPageValues.Welcome}</div>
            <div className="flex flex-col justify-center items-center mt-5">
                <img src={orderState === 0 ? unreadyImg : (orderState === 1 ? preparing : ready)} className="w-[80px] h-[80px]"/>
                <div className={`font-bold ${orderState === 0 ? `text-[#988B8B]` : orderState === 1 ? `text-[#FF993C]` : `text-[#65C55D]`} mt-5 text-xl`}>{orderState === 0 ? DefaultOrderStatusPageValues.NotReady : (orderState === 1 ? DefaultOrderStatusPageValues.Preparing : DefaultOrderStatusPageValues.Ready)}</div>
            </div>
            <section className="bg-[#F3F3F3] rounded-2xl ml-5 mr-5 mt-7 overflow-hidden">
                <div className="text-center text-[#FB6300] mt-5">{DefaultOrderStatusPageValues.DownloadInvoice} <a href="#" className="font-bold">{DefaultOrderStatusPageValues.Here}</a>:)</div>
                <h2 className="text-center font-bold text-black text-[24px]">{DefaultOrderStatusPageValues.ShopName}</h2>
                <div className="text-center text-[#4D4D4D] text-sm">{DefaultOrderStatusPageValues.ABN}</div>
                <div className="text-center text-[#4D4D4D] text-sm">{DefaultOrderStatusPageValues.Invoice}</div>
                <div className="text-right text-[#4D4D4D] text-sm mr-5 mt-2">{DefaultOrderStatusPageValues.Time}</div>
                {
                    orderListData.map((item: any) => (
                        <OrderList 
                            key={item.orderId} 
                            orderId={item.orderId}
                            orderName={item.orderName} 
                            orderDishList={item.orderDishList} 
                            total={item.total}  />
                    ))
                }
                <ul className="ml-5 mr-5 mb-2 text-[#4D4D4D] text-sm pb-2 border-b border-[#D9D6D6]">
                    <li className="flex flex-row justify-between items-center">
                        <span>{DefaultOrderStatusPageValues.SubtotalText}</span>
                        <span>{subTotal}</span>
                    </li>
                    <li className="flex flex-row justify-between items-center">
                        <span>{DefaultOrderStatusPageValues.GSTText}</span>
                        <span>{DefaultOrderStatusPageValues.Included}</span>
                    </li>
                    <li className="flex flex-row justify-between items-center text-[#EF7221]">
                        <span>{DefaultOrderStatusPageValues.DiscountText}</span>
                        <span>{disCount}</span>
                    </li>
                </ul>
                <div className="ml-5 mr-5 font-bold text-xl flex justify-between">
                    <span>{DefaultOrderStatusPageValues.TotalText}</span>
                    <span>{total}</span>
                </div>
                <div className="pt-5 pb-5 font-bold text-2xl flex justify-center items-center">{DefaultOrderStatusPageValues.ThankText}</div>
            </section>
        </div>
    )
}

export default OrderStatus