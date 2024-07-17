import React from "react";
import "./BottomNavBar.css";
import { useNavigate } from 'react-router-dom';

interface BottomNavBarProps {
    isClient:boolean;
}

const BottomNavBar: React.FC<BottomNavBarProps> = (
    {isClient})=>{
    // TODO: need to find the icons. Need to update the navbar component itself. Need to view the previews. 

    // TODO: Add a boolean props to determine whether to return client bar or business bar
    const businessNavBar = {
        iconList:['lni lni-home', 'lni lni-dinner', 'lni lni-clipboard', 'lni lni-user'],
        wordList: ['HOME', 'KITCHEN', 'MENU', 'PROFILE'],
        pathList:['','kitchen', 'menu','profile']
    }

    const clientNavBar = {
        iconList:['lni lni-home', 'lni lni-clipboard', 'lni lni-cart-full', 'lni lni-user'],
        wordList: ['Home', 'Menu', 'Take away', 'Profile'],
        pathList:['','menu', 'takeaway','profile']
    }

    
    // TODO: Implement the click router for each page? 
     const navigate = useNavigate();

    // Business Bar
    return (
        <nav className="bottom-nav flex space-around">
            <div className="bottom-nav-item flex vertical align-center" onClick={()}>
                <i className="lni lni-home"></i>
                <span className="nav-item-span">HOME</span>
            </div>
            <div className="bottom-nav-item flex vertical align-center">
                <i className="lni lni-dinner"></i>
                <span className="nav-item-span">KITCHEN</span>
            </div>
            <div className="bottom-nav-item flex vertical align-center">
                <i className="lni lni-clipboard"></i>
                <span className="nav-item-span">MENU</span>
            </div>
            <div className="bottom-nav-item flex vertical align-center">
                <i className="lni lni-user"></i>
                <span className="nav-item-span">PROFILE</span>
            </div>
        </nav>
    )
}