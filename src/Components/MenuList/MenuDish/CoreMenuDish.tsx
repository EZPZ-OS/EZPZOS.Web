import React from 'react'
import {AddButton} from '../../AddButton'

interface CoreMenuDishProps {
    name: string,
    hasSpecialTag: boolean,
    description: string,
    imgPath: string,
    price: string
}

const CoreMenueDish : React.FC<CoreMenuDishProps> = ({name, hasSpecialTag, description, imgPath, price})=>{

    return (
        <div className='flex w-4/5 h-[130px] justify-between items-stretch'> // main container: 'w-4/5 to be the width of the dish list"
            <div> // img
                <img src={imgPath} alt={name} className='w-[120px] h-full top-0 left-0 gap-0 rounded-[8px] opacity-0'/>
            </div>

            <div className='w-[240px] h-full gap-0 opacity-0 flex flex-col '> //profiles
                {/* title */}
                <p className='font-sans text-lg font-bold leading-6 text-left'>{name}</p>
                {/* hasSpecialTag ? tag : null */}
                
                {/* description */}
                <p className='text-sm font-normal leading-[21px] text-left'>{description} </p>
                <div className='flex justify-between '> // bottom price + button
                    <p>{price}</p>
                    <AddButton /> //button
                </div>
            </div>
        </div>
    )

}

module.exports = CoreMenueDish