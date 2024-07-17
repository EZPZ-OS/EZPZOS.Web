
import TakawayIcon from "../../Assets/Icons/TakeawayIcon.png"
import DineInIcon from "../../Assets/Icons/DineInIcon.png"
import BookingIcon from "../../Assets/Icons/BookingIcon.png"


const HomePageButtons =()=>{



    return(

        <div>
        <div className='w-full flex  justify-center items-center gap-10 mt-10'>
             <div className="flex flex-col items-center gap-2 ">
                <img src={DineInIcon} className='w-[70px] h-[80px] ' alt="logo"/>
                <div className="text-white	">DINE</div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <img src={BookingIcon} className='w-[70px] h-[80px] ' alt="logo"/>
                <div className="text-white	">BOOKING</div>

            </div>

            <div className="flex flex-col items-center gap-2">
                <img src={TakawayIcon} className='w-[70px] h-[80px] ' alt="logo"/>
                <div className="text-white	">TAKEAWAY</div>

            </div>

        </div>
    </div>
    )
}


export default HomePageButtons;


