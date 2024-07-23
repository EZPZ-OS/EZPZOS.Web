import React,{useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import KungPaoChicken from "../../Assets/Images/CuisineImages/KungPaoChicken.png";
import {AiOutlineDelete} from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
interface props {
    MobileNumber?: string
};

const ClientCartForm: React.FC<props> = () => {
    return (
        <div className="flex flex-wrap max-w-screen-sm font-lato w-[430px] h-[899px] bg-[#F3F3F3]">
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
            <div className="w-[430px] h-[384px] bg-scroll mt-4 overflow-y-scroll">
                <div className="flex flex-wrap w-[384px] h-[128px] bg-scroll mt-4 ml-[22px] font-semibold border-b-[1px] border-b-[#D9D6D6]">
                    <img src={KungPaoChicken}
                         className="w-[70px] h-[70px] rounded-lg"/>
                    <div className="ml-2 w-[306px] h-[70px]">
                        <div className="w-[306px] h-[33px] text-[16px] mt-[5px] text-[16px]">
                            Kung Pao Chicken
                        </div>
                        <div className="w-[306px] text-[15px] mt-[5px] text-[#4D4D4D]">
                            $17.5
                        </div>
                    </div>
                    <div className="flex justify-between w-[430px]">
                        <button
                            className="w-[162px] h-[34px] rounded-full bg-orange-gradient">
                            Move to Take Away
                        </button>
                        <div className="flex items-center justify-evenly w-[124px] h-[38px] rounded-full bg-[#FF9900]">
                            <button>
                                <AiOutlineDelete/>
                            </button>
                            <div className="text-[14px]">
                                1
                            </div>
                            <button>
                                <IoAddOutline />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ClientCartForm;
