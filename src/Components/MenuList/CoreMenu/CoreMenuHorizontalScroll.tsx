import React, { useState } from 'react';

interface category {
    categories: Array<string>
}



const CoreMenuHorizontalScroll : React.FC<category> = ({categories})=>{

    const [activeCategory, setActiveCategory] = useState("Popular Dishes");

// TODO: finish this horizontal scroll bar. Change the active one via setActiveCategory.

    return (
        <div className=''>
            {categories.map((item, index)=>(

                <span key={index} className="px-4 py-2 bg-white rounded-full shadow-sm">{item}</span>

            ))}
        </div>
    )
}


