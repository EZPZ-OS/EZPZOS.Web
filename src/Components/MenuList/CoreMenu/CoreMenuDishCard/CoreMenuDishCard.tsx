/**
 * @author: Harrison
 */
import React from "react";
import { AddButton } from "./AddButton";

/**
 * Here is the dish card for a dish in the menu
 */

interface CoreMenuDishProps {
	name: string;
	hasSpecialTag: boolean;
	description: string;
	tag: string | null;
	imgPath: string;
	price: number;
	dishDetailPath: string; //'./a/path/to/dish/detail/card'
}

/**
 * Here is the dish card for a dish in the menu (Actually in the part called 'CoreMenu' of Menu)
 * @param param0    
 *  name: string, the name of the dish
    hasSpecialTag: boolean, whether the dish has that small,
    tag: string, tag for the dish shown in the card. e.g. No.1 ordered
    description: string,
    imgPath: string, the img path for that dish.
    price: number
 * @returns 
 */

export const CoreMenuDishCard: React.FC<CoreMenuDishProps> = ({
	name,
	hasSpecialTag,
	tag,
	description,
	imgPath,
	price,
	dishDetailPath
}) => {
	// console.log(name);
	return (
		<div className="w-9/10 flex h-[130px] justify-between items-stretch mt-[9px]">
			{/* img */}
			<img src={imgPath} alt={name} className="w-[120px] h-full top-0 left-0 gap-0 rounded-[8px] " />

			{/* profile */}
			<div className="w-2/3 h-full gap-0 flex flex-col items-start">
				{/* title */}
				<p className="font-sans text-17px font-bold leading-[32px] height-[32px] text-left">{name} </p>

				{/* hasSpecialTag ? tag : null */}
				{hasSpecialTag ? (
					<p className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-[3px] py-[1px] text-[14px] rounded-[2px] h-[18px] leading-[18px]">
						{tag}
					</p>
				) : (
					<div className="h-[18px] leading-[18px]"> </div>
				)}

				{/* description */}
				<p className="text-sm font-normal leading-[21px] text-left">{description} </p>
				{/* price + button */}
				<div className="flex justify-between items-center w-full h-[33px]">
					<span className="">{`$${price}`}</span>
					<AddButton dishDetailPath={dishDetailPath} />
				</div>
			</div>
		</div>
	);
};

export default CoreMenuDishCard;
