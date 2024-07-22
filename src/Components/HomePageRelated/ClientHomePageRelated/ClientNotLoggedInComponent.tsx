import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/Logo.png"
import { HomePageDataProp } from "../../../pages/Home";
import HomePageButtons from "../HomePageButtons";
const ClientNotLoggedInComponent:React.FC <HomePageDataProp>=({ data = {homepagelist:[
    
    {
        img: 'DineInIcon.png',
        title: 'DINE IN'
    },
    {
        img: 'BookingIcon.png',
        title: 'BOOK'
    },
    {
        img: 'TakeawayIcon.png',
        title: 'TAKE AWAY'
    }
]}
})=>{

  

    return(
    
    <div className="w-full flex flex-col justify-center items-center">
    
        <img src={Logo} className='w-[90px] h-[100px] mt-44' alt="logo"/>
        <p className='text-2xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FFB682F5] text-transparent bg-clip-text'>EZPZ OS</p>
        {/* <p className='text-3xl font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text mt-7'>WELCOME BACK</p> */}
        {/* <p className='text-3xl font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text'>:D</p> */}

        {/* <ClientHomePageButtons {...icons=icons}/> */}
        <div className="flex gap-16">
        {data.homepagelist.map((data,index)=>{
          return <HomePageButtons key={index} img={data.img} title={data.title} />
        })}
        </div>
        <div className="flex-col">
            <Link to="signup" >
            <button className="h-[50px] w-[370px] rounded-lg mt-14 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#FFB682F5] via-[#F8A27AF5] to-[#F28C83F5]">
             LOG IN
                 </button>
            </Link>
            <div className="mt-4">
                <span className=" text-[#dcdcdcbb] ">Don't have an account? </span>
                <Link to="" className="font-bold text-[#dcdcdcbb] ">Sign up :）</Link>
            </div>

        </div>
        </div>
    )
}

export default ClientNotLoggedInComponent;