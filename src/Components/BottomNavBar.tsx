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

  console.log('here i am')
  return (
    <div className="bg-[#D9D9D9] p-4 text-[#988B8B] w-full h-[88px] flex bottom-0 text-center">
      <div className="top-[8px] w-[80%] left-[10%]  h-[51px] flex justify-between">
        {navBar.iconList.map((iconComponent, index) => (
          <div key={index} className="flex-col" onClick={() => navigate(navBar.pathList[index])}>
            {iconComponent}
            <span>{navBar.wordList[index]}</span>
          </div>
        ))}
      </div>
    </div>

  );
}

export default BottomNavBar


