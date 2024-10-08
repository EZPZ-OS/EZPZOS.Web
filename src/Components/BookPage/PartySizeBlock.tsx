import React from "react";

export default function PartySizeBlock(props: { sizeNumber: number; clicked: boolean }) {
	const size = props.sizeNumber;
	const clicked = props.clicked;
	return (
		<div
			className="h-[40px] w-[40px]  text-[15px] flex justify-center items-center rounded-[12px]"
			style={clicked ? { border: "1px solid #F96B6B" } : { border: "1px solid black" }}
		>
			{size}
		</div>
	);
}
