
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/Logo.png"
import ClientHomePageButtons from "../ClientHomePageButtons";

export interface iconsProp{
    icons?:string[];
}
const ClientLoggedInComponent:React.FC<iconsProp> =({icons=["DineInIcon.png","TakeawayIcon.png","BookingIcon.png"
]})=>{


    return(
    
    <div className="w-full flex flex-col justify-center items-center">
    
        <img src={Logo} className='w-[90px] h-[100px] mt-44' alt="logo"/>
        <p className='text-2xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FFB682F5] text-transparent bg-clip-text'> Client Welcome back</p>
        {/* <p className='text-3xl font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text mt-7'>WELCOME BACK</p> */}
        {/* <p className='text-3xl font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text'>:D</p> */}
        <div className="">
            <ClientHomePageButtons {...icons=icons}/>
        </div>
        {/* <div className="flex-col">
            <Link to="signup" >
            <button className="h-[50px] w-[370px] rounded-lg mt-14 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#FFB682F5] via-[#F8A27AF5] to-[#F28C83F5]">
                 </button>
            </Link>
            
        </div> */}
        </div>
    )
}

export default ClientLoggedInComponent;