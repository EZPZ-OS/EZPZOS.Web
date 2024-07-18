import React from "react";
import { useNavigate } from 'react-router-dom';
import { RiHome2Line } from "react-icons/ri"; // home
import { FaDove, FaUser } from "react-icons/fa6"; // profile
import { PiForkKnifeBold } from "react-icons/pi"; //kitchen
import { TbClipboardText } from "react-icons/tb"; // menu
import { PiHandbag } from "react-icons/pi"; // take away


interface BottomNavBarProps {
  isClient: boolean;
}

const BottomNavBar: React.FC<BottomNavBarProps> = (
  { isClient }) => {

  const businessNavBar = {
    iconList: [<RiHome2Line />, <PiForkKnifeBold />, <TbClipboardText />, <FaUser />],
    wordList: ['HOME', 'KITCHEN', 'MENU', 'PROFILE'],
    pathList: ['/', 'kitchen', 'menu', 'profile']
  }

  const clientNavBar = {
    iconList: [<RiHome2Line />, <TbClipboardText />, <PiHandbag />, <FaUser />],
    wordList: ['Home', 'Menu', 'Take away', 'Profile'],
    pathList: ['/', 'menu', 'takeaway', 'profile']
  }

  const navBar = isClient ? clientNavBar : businessNavBar

  const navigate = useNavigate();

  // console.log('here i am')
  return (
    <div className="bg-[#D9D9D9] pt-[8px] text-[#988B8B] w-full h-[88px] flex bottom-0 text-center fixed justify-center px-[10%] ">
      <div className=" w-full h-[51px] flex justify-between padding-0">
        {navBar.iconList.map((iconComponent, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => navigate(navBar.pathList[index])}>
            {/* here are two divs for each page: icon div + text span div. In the icon div, the flex items-center are to centralize the icon */}
            <div className="h-[30px] flex items-center">  
              {/* Here "cloneElement" is to pass the style of w-full h-full to the predefined react icon components*/}
              {React.cloneElement(iconComponent, { className: 'h-full w-full' })}
              </div>
            <span className="font-istok text-[14px] font-thin leading-[21px] text-center">{navBar.wordList[index]}</span>
          </div>
        ))}
      </div>
    </div>

  );
}

export default BottomNavBar


