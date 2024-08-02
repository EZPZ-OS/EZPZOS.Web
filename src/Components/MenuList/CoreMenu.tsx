import React from 'react';
import {CoreMenuDishCard} from './CoreMenu/CoreMenuDishCard'
import DishImg from "../../Assets/Images/dish.png"; // home

interface CoreMenuProps {
    isDining: boolean;
}




const CoreMenu : React.FC<CoreMenuProps> = ({isDining})=>{ 

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
        imgPath: DishImg,
        price: 17.5,
    };

    return (
        <div className='w-full'>
            <div>
                 {/* // TODO: horizontal scroll bar. */}
                 {/* // TODO: Tie the dishes up with the category.  display in this way  dishes[barActiveCategory]. 注意子(barActiveCategory)传父,再 给下面的list子用 */}
                 Here is horizontal scroll bar placeholder.
            </div>
            
            <div className='w-full flex flex-col items-center'>
                {/* // TODO: dish list. Shoule change with the horizontal bar */}
                <CoreMenuDishCard {...dish1}/>
                <CoreMenuDishCard {...dish2}/>
            </div>

        </div>
    )
}

export default CoreMenu
