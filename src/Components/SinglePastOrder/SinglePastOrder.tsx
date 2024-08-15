import React from 'react'
import { DefaultPastOrderContent } from "ezpzos.core";

interface IProps  {
    orderItem: Object;
    handleReOrder: Function
}

/**
 * @param orderItem - The object of the past order {@link PastOrder.oldOrder}
 * @param handleReOrder - Callback function to order again {@link PastOrder.handleReOrder}
 */

const SinglePastOrder = (props: IProps) => {
    const {orderItem, handleReOrder} = props;

    const handleOrderAgain = (id: string) => {
        handleReOrder(id);
    }

    return (
        <section className="relative after:content-[''] after:bg-[#CBC2C2] after:bg-opacity-35 after:block after:h-3">
            <div className="ml-5 mr-5 py-3">
                <h2 className="pt-4 font-bold text-base">{orderItem.title}</h2>
                <div className="text-sm text-gray-400 mt-2">{orderItem.itemNum} {DefaultPastOrderContent.Items} ${orderItem.price}</div>
                <div className="text-sm font-regular mt-2">{orderItem.date} {orderItem.status}</div>
            </div>
            <span className="absolute right-5 bottom-[40px] w-[103px] h-[32px] leading-8 bg-black text-white text-center rounded-3xl" onClick={() => handleOrderAgain(orderItem.orderId)}>{DefaultPastOrderContent.BtnTitle}</span>
        </section>
    )
}

export default SinglePastOrder