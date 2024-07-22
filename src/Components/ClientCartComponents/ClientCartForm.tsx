import React,{useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
interface props {
    MobileNumber?: string
};

const ClientCartForm: React.FC<props> = ({MobileNumber = "0473001475"}) => {
    return (
        <div className="flex flex-wrap max-w-screen-sm font-lato w-[430px] h-[899px] bg-[#F3F3F3] bg-scroll">
            <Link to={{pathname: `/`}}>
                <button className="font-bold text-left w-[430px] h-[28.38px] text-[28.38px] pl-[26.07px] mt-[47px]"
                        type="button">
                    X
                </button>
            </Link>
            <div className="font-bold text-left w-[430px] h-9 text-[24px] mt-4 pl-[26px]">
                DemoData Sichuan Cuisine
            </div>
            <hr className="w-[430px] h-[7px] bg-[#E2DEDE] mt-4"/>
            <div className="font-semibold text-left w-[430px] h-9 text-[24px] mt-4 pl-[23px]">
                Dine In
            </div>
            <div className="w-[430px] h-[384px] bg-scroll mt-4">

            </div>
        </div>
    );
};

export default ClientCartForm;
