/**
 * @author: Harrison
 */
import React from 'react'
import DishImg from "../../../Assets/Images/dish.png";
import DishImg2 from "../../../Assets/Images/dish2.png";

const dish1 = {
    name: "Stewed beef with potatoes",
    hasSpecialTag: false,
    description: "This is the description. This is the description.",
    tag: null,
    imgPath: DishImg,
    price: 17.5,
};

const dish2 = {
    name: "Stewed beef with potatoes",
    hasSpecialTag: true,
    description: "This is the description. This is the description.",
    tag: 'No.1 ordered',
    imgPath: DishImg2,
    price: 17.5,
};


const categoryToDishes = {
    'Popular Dishes':[dish1,dish2],
    'En':[dish2,dish1],
    'ées':[dish1,dish2],
    'one':[dish1,dish2],
    'two':[dish2,dish1],
    'three':[dish1,dish2],
    'four':[dish2,dish1],
    'five':[dish1,dish2],
    'six':[dish2,dish1],
    'someRandom':[dish1,dish2],
    'placeholer':[dish2,dish1]
}

const cates = Object.keys(categoryToDishes)

export default categoryToDishes
export {cates}