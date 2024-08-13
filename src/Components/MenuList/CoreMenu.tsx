/**
 * @author: Harrison
 */
import React, { useEffect, useState } from 'react';
import {CoreMenuDishCard} from './CoreMenu/CoreMenuDishCard'
import CoreMenuHorizontalScroll from './CoreMenu/CoreMenuHorizontalScroll';
import categoryToDishes, {cates} from './MockCoreMenuData/MockCoreMenuData'

interface CoreMenuProps {
    isDining: boolean;
}

interface CoreMenuDishProps {
    name: string,
    hasSpecialTag: boolean,
    description: string,
    tag: string | null,
    imgPath: string,
    price: number
}

interface categoryToDishes {
    categories: Array<string>,
    currentActive: string,
    changeActive: (newActive: string) => void
    sortCategories: (newActive: Array<string>) => void
}



// ! Mock data is imported from './MockCoreMenuData/MockCoreMenuData.js'

const CoreMenu : React.FC<CoreMenuProps> = ({isDining})=>{ 
    
    // ? useEffect() ?

    const [currentActive, setActiveCategory] = useState(cates[0])
    const [currentCategories, setCurrentCategories] = useState(cates)
    
    const dishes = categoryToDishes[currentActive as keyof typeof categoryToDishes]


    return (
        <div className='w-full'>
            <div>
                 {/* // TODO: horizontal scroll bar. */}
                 {/* // TODO: Tie the dishes up with the category.  display in this way  dishes[barActiveCategory]. 注意子(barActiveCategory)传父,再 给下面的list子用 */}
                 Here is horizontal scroll bar placeholder.
                 <CoreMenuHorizontalScroll categories={currentCategories} currentActive={currentActive} changeActive={setActiveCategory} sortCategories={setCurrentCategories}/>
            </div>
            
            <div className='w-full flex flex-col items-center'>
                {Array.isArray(dishes) && dishes.map((dish: CoreMenuDishProps, index: number)=>(
                    <CoreMenuDishCard key={index} {...dish}/>
                ))}
            </div>

        </div>
    )
}

export default CoreMenu
