
import TakawayIcon from "../../Assets/Icons/TakeawayIcon.png"
import DineInIcon from "../../Assets/Icons/DineInIcon.png"



const BusinessHomePageButtons =()=>{



    return(

        <div>
        <div className='w-full flex justify-center items-center gap-10 mt-12'>
             <div className="flex flex-col items-center gap-2 ">
                   < img src={DineInIcon} className='w-[70px] h-[80px] ' alt="logo"/>
                <div className="text-white	">KITCHEN</div>
            </div>


            <div className="flex flex-col items-center gap-2">
                <img src={TakawayIcon} className='w-[70px] h-[80px] ' alt="logo"/>
                <div className="text-white	">ADMIN</div>

            </div>

        </div>
        </div>
    )
}


export default BusinessHomePageButtons;


