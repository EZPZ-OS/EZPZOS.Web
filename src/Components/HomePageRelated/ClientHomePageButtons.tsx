
import TakawayIcon from "../../Assets/Icons/TakeawayIcon.png"
import DineInIcon from "../../Assets/Icons/DineInIcon.png"
import BookingIcon from "../../Assets/Icons/BookingIcon.png"


const ClientHomePageButtons =(icons:string[])=>{
    return(

        <div>
        <div className='w-full flex  justify-center items-center gap-16 mt-8'>
             <div className="flex flex-col items-center gap-2 ">
                <img src={require(`../../Assets/Icons/${icons[0]}`)} className='w-[70px] h-[80px] ' alt="logo"/>
                <div className="text-white text-sm	">DINE</div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <img src={BookingIcon} className='w-[70px] h-[80px] ' alt="logo"/>
                <div className="text-white text-sm	">BOOK</div>

            </div>

            <div className="flex flex-col items-center gap-2">
                <img src={TakawayIcon} className='w-[70px] h-[80px] ' alt="logo"/>
                <div className="text-white	text-sm">TAKEAWAY</div>

            </div>

        </div>
    </div>
    )
}


export default ClientHomePageButtons;


