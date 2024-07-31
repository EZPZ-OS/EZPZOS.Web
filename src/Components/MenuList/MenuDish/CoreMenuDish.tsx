import React from 'react'

interface CoreMenueDishProps {
    name: string,
    hasSpecialTag: boolean,
    description: string,
    imgPath: string,
    price: string
}

const CoreMenueDish : React.FC<CoreMenueDishProps> = ({name, hasSpecialTag, description, imgPath, price})=>{

    return (
        <div className='flex w-4/5'> // main container
            <div> // img
                <img src={imgPath} alt={name} />
            </div>

            <div> //profiles
                {/* title */}
                {/* hasSpecialTag ? tag : null */}
                <div> // bottom price + button
                    <p>{price}</p>
                    <div></div> //button
                </div>
            </div>
        </div>
    )

}

module.exports = CoreMenueDish