import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/Logo.png"


const BusinessNotLoggedInComponent =()=>{



    return(
    
    <div className="w-full flex flex-col justify-center items-center">
    
        <img src={Logo} className='w-[90px] h-[100px] mt-44' alt="logo"/>
        <p className='text-2xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FFB682F5] text-transparent bg-clip-text'>EZPZ OS</p>
        <p className='text-3xl font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text mt-10'>WELCOME BACK</p>
        <p className='text-3xl font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text'>:D</p>

       

        <div className="flex-col">
            <Link to="signup" >
            <button className="h-[50px] w-[370px] rounded-lg mt-14 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#FF993C] via-[#D95E5A] to-[#BA2F72]">
             LOG IN
                 </button>
            </Link>
            
        </div>
        </div>
    )
}

export default BusinessNotLoggedInComponent;