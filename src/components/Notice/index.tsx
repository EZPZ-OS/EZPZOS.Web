import React from 'react'
import { SlArrowRight } from "react-icons/sl";

import horn_icon from './images/horn_icon.png'

const Notice = (props: any) => {
    return (
        <div className='w-3/4 h-16 mb-1 rounded-xl border-[0.5px] flex flex-row items-center'>
            <img src={horn_icon} alt="horn_icon" className='w-6 h-6 ml-3'/>
            <div className='flex-1 ml-3 mr-3'>
                <p className='text-white text-sm'>{props.title}</p>
                <p className='text-white text-sm'>{props.content}</p>
            </div>
            <SlArrowRight className='mr-3 text-white'/>
        </div>
    )
}

export default Notice