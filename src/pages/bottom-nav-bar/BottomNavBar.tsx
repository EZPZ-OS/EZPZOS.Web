import React from "react";
import "./BottomNavBar.css";

const BottomNavBar: React.FC = (props) => {
    // TODO: Add a boolean props to determine whether to return client bar or business bar
    const {isKitchen} = props

    // TODO: Implement the click router for each page? 

    // Business Bar
    return (
        <nav className="bottom-nav flex space-around">
            <div className="bottom-nav-item flex vertical align-center">
                <i className="lni lni-home"></i>
                <span className="nav-item-span">Home</span>
            </div>
            <div className="bottom-nav-item flex vertical align-center">
                <i className="lni lni-dinner "></i>
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