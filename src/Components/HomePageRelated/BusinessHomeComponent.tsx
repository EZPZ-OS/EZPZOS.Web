import React, {useState} from 'react'

// import Notice from '../Notice'
// import bg from './images/background_bg.png'
// import avatar from './images/avatar_icon.png'
// import eat_icon from './images/eat_icon.png'
// import booking_icon from './images/booking_icon.png'
// import pick_up_icon from './images/pick_up_icon.png'
import GoogleIcon from 'src\Assets\Images\GoogleIcon.png'
import HomePageButtons from './HomePageButtons';

const BusinessHomeComponent =()=>{



    return(
<div>
        <div className='w-full flex flex-col justify-center items-center'>
            {/* <img src={avatar} className='w-[80px] h-[80px] mt-[80px]' alt="avatar"/> */}
            <p className='text-3xl bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text'>Hi, @Username,</p>
            <p className="text-base bg-gradient-to-r from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text">Would you like to ...</p>
        </div>
        <HomePageButtons/>
        {/* <div className='flex flex-col items-center mt-4'>
            {
                noticeList.map((item, index)=>{
                    return <Notice key={index} title={item.title} content={item.content}/>
                })
            }
        </div> */}
        {/* <img alt="b_logo" src={bottom_logo} className='absolute left-0 right-0 m-auto bottom-3'/> */}

        </div>
    )
}


export default BusinessHomeComponent;


