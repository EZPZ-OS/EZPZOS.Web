/**
 * @author: Harrison
 */
import React from "react";
import DishImg from "../../../../Assets/Images/dish.png";
import DishImg2 from "../../../../Assets/Images/dish2.png";

const dish1 = {
	name: "Stewed beef with potatoes",
	hasSpecialTag: false,
	description: "This is the description. This is the description.",
	tag: null,
	imgPath: DishImg,
	price: 17.5,
	// ! This path field is just a placeholder for dish detail card. For more info, please read the comment of the file:
	// !      'src/Components/MenuList/DishDetail.tsx'
	dishDetailPath: "../DishDetail"
};

const dish2 = {
	name: "Stewed beef with potatoes",
	hasSpecialTag: true,
	description: "This is the description. This is the description.",
	tag: "No.1 ordered",
	imgPath: DishImg2,
	price: 17.5,
	dishDetailPath: "../DishDetail"
};

const categoryToDishes = {
	"1Popular Dishes": [dish1, dish2],
	"2En": [dish2, dish1],
	"3ées": [dish1, dish2],
	"4one": [dish1, dish2],
	"5two": [dish2, dish1],
	"6three": [dish1, dish2],
	"7four": [dish2, dish1],
	"8five": [dish1, dish2],
	"9six": [dish2, dish1],
	"9someRandom": [dish1, dish2],
	"9placeholer": [dish2, dish1]
};

const cates = Object.keys(categoryToDishes).sort();

export default categoryToDishes;
export { cates };
