import React from "react";

interface OrderListProps {
	orderId: number;
	orderName: string;
	orderDishList: Array<object>;
	total: string;
}
/**
 * @param orderId - order id
 * @param orderName - order name
 * @param orderDishList - the detail data of order
 * @param total - total price
 *
 */

const OrderList = (props: OrderListProps) => {
	const { orderName, orderDishList, total } = props;

	return (
		<div className="ml-5 mr-5 mb-5 border-b border-[#D9D6D6]">
			<h3 className="text-[#4D4D4D] text-sm">{orderName}</h3>
			<ul className="text-[#4D4D4D] text-sm mt-2">
				{orderDishList.map((item: any, index: number) => (
					<li key={index} className="flex flex-row items-center justify-between mb-2">
						<div className="flex flex-row items-center">
							<span className="w-5 h-5 bg-[#D9D9D9] text-center rounded-md">{item.count}</span>
							<span className="ml-2">{item.name}</span>
						</div>
						<span>{item.price}</span>
					</li>
				))}
			</ul>
			<div className="flex justify-end pb-2">
				<span className="text-[#4D4D4D] text-sm underline">{total}</span>
			</div>
		</div>
	);
};

export default OrderList;
