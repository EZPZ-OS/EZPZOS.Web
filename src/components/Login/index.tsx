import React from 'react'

import logo from './images/logo_icon.png'
import bg from './images/background_bg.png'

const Login = () => {
    return (
        <div className='h-screen relative overflow-hidden' style={{'backgroundImage': `url(${bg})`}}>
            <div className='w-full flex flex-col justify-center items-center'>
                <img src={logo} className='w-[80px] h-[80px] mt-[80px]' alt="logo"/>
                <p className='text-2xl font-normal bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text'>EZPZ OS</p>
                <p className='text-3xl font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text mt-7'>WELCOME BACK</p>
                <p className='text-3xl font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text'>:D</p>
            </div>
            <div className='m-auto w-4/5 mt-8 bg-gradient-to-r from-[#FF993C] to-[#D95E5A] to-[#BA2F72] rounded-xl text-white text-center leading-10'>LOGIN</div>
        </div>
    )
}

export default Login