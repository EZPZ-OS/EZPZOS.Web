/**
 * @author: Harrison
 */
import React from 'react';
import { useNavigate } from "react-router-dom";

/**
 * Did not link to the page for dish. Need covered after getting the dish page.
 * 
 * @returns An add button in the dish card.
 */

interface pathProps {
    dishDetailPath: string
}

export const AddButton : React.FC<pathProps> = ({dishDetailPath})=>{
    const navigate = useNavigate();

    return(
        <button className='relative flex items-center justify-center w-[33px] h-[33px] bg-gradient-to-r from-orange-500 to-red-600 rounded-full'
            // ! This is just a placeholder as the hooker of dish detail page.
            onClick={()=>navigate(dishDetailPath)}>
            <span className='absolute top-[-5px] text-white text-4xl w-[33px] h-[33px]'> + </span> 
        </button>
    )
}

export default AddButton