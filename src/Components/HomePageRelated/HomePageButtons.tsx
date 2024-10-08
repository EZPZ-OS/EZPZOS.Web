import React from "react";
import { Link } from "react-router-dom";

interface HomePageButtonProps {
	img: string;
	title: string;
	path: string;
}

/**
 * This interface defines the properties for the HomePageButton.
 * @param title - The HomePageButton's title.
 * @param img - The HomePageButton's image URL string.
 * @param path - The navigation path to be linked to when the button is clicked.
 */
const HomePageButtons: React.FC<HomePageButtonProps> = ({ img, title, path }) => {
	console.log("path", path);
	return (
		<Link to={path} className="w-full flex justify-center items-center gap-10 mt-12">
			<div className="flex flex-col w-[90px] items-center gap-2">
				<img src={require(`../../Assets/Icons/${img}`)} className="w-[70px] h-[80px]" alt={title} />
				<div className="text-white text-sm">{title}</div>
			</div>
		</Link>
	);
};

export default HomePageButtons;
