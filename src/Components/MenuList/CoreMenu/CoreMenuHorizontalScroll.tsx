import React, { useState } from 'react';

interface category {
    categories: Array<string>,
    currentActive: string,
    changeActive: (newActive: string) => void
}

const CoreMenuHorizontalScroll : React.FC<category> = ({categories, currentActive, changeActive})=>{

// TODO: finish this horizontal scroll bar. Change the active one via setActiveCategory.
    
    const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        // DO something else. 子传父?
        const value = event.currentTarget.getAttribute('data-category');
        debugger
        if(value){
            changeActive(value)
            console.log(value)
        }
    }


    return (
            <div className='w-full overflow-x-auto whitespace-nowrap inline-flex space-x-[12px] p-[12px] h-[48px] leading-[48px] bg-gray-200'>
                {categories.map((item, index)=>(
                    <span key={index} className={`h-[24px] leading-[24px] text-16px cursor-pointer ${currentActive === item ? 'bg-white font-bold' : ''}`}
                    onClick={handleClick}>
                        {item}
                    </span>
                ))}
            </div>
    )
}

export default CoreMenuHorizontalScroll


