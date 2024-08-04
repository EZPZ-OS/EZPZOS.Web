import React from 'react';

/**
 * Did not link to the page for dish. Need covered after getting the dish page.
 * 
 * @returns An add button in the dish card.
 */

export const AddButton : React.FC = ()=>{
    
    return(
        <button className='flex items-center justify-center w-[33px] h-[33px] text-white text-4xl bg-gradient-to-r from-orange-500 to-red-600 rounded-full '>
            +
        </button>
    )
}

export default AddButton