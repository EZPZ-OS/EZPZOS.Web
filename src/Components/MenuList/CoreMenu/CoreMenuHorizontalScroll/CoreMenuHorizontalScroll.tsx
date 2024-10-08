/**
 * @author: Harrison
 */
import React, { useState } from "react";

interface category {
	categories: Array<string>;
	currentActive: string;
	changeActive: (newActive: string) => void;
	sortCategories: (newActive: Array<string>) => void;
}

const CoreMenuHorizontalScroll: React.FC<category> = ({
	categories: currentCategories,
	currentActive,
	changeActive,
	sortCategories
}) => {
	const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		//  1. 子传父 setState for active item
		//  2. Sort the 'categories' array and make the active one to left most.
		const categoryToActivate = event.currentTarget.outerText;
		// debugger
		if (categoryToActivate) {
			let index = currentCategories.indexOf(categoryToActivate);
			// ? Operating the original array directly, which may cause a bug later on for other components invoking the 'categories'. Need extra attention !!!!
			// ? However, this may dramatically save the runtime memory usage for later large data imported. Talk to me if you have a different preference.
			currentCategories.splice(index, 1);
			currentCategories.sort();
			currentCategories.unshift(categoryToActivate);
			// * Although in this component, 'currentActive' does not contribute in the first place (as this bar in rendered via the sorted array),
			// *    this watched variable is necessary for other utilities, such as the associated dishes to display and some others.
			sortCategories(currentCategories);
			changeActive(categoryToActivate);
		}
	};

	return (
		<div className="w-full  inline-flex h-[48px]">
			<p className="bg-white whitespace-nowrap font-bold cursor-pointer h-[48px] leading-[48px] text-16px px-[12px]">
				{currentCategories[0]}
			</p>
			{/* ! Here 'scrollbar-hide' is used to hide the scrollbar. In order to do that, following steps are required:*/}
			{/* ! 1. Add "require('tailwind-scrollbar-hide')" to plugin session of tailwind.config.js */}
			{/* ! 2. run npm install tailwind-scrollbar-hide */}
			<div className="overflow-x-auto w-full whitespace-nowrap inline-flex h-[48px] leading-[48px] bg-gray-200 rounded-bl-[1.2rem] scrollbar-hide">
				{currentCategories.slice(1).map((item, index) => (
					<span
						key={index}
						className={"h-[24px] leading-[24px] text-16px cursor-pointer p-[12px] space-x-[12px]"}
						onClick={handleClick}
					>
						{item}
					</span>
				))}
			</div>
		</div>
	);
};

export default CoreMenuHorizontalScroll;
