import React from 'react';


interface CoreMenuProps {
    isDining: boolean;
}



const CoreMenu : React.FC<CoreMenuProps> = ({isDining})=>{

    
    
    return (
        <div>
            <div>
                 {/* // TODO: horizontal scroll bar. Activate states with the item to display. */}
            </div>
            
            <div>
                {/* // TODO: dish list. Shoule change with the horizontal bar */}
            </div>

        </div>
    )
}

module.exports = CoreMenu
