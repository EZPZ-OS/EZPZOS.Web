import React,{useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import KungPaoChicken from "../../Assets/Images/CuisineImages/KungPaoChicken.png";
import {AiOutlineDelete, AiOutlineGift} from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import {DafaultMenuRoutesValues} from "../../Common/Constants";
import {ClientCartDemoData, Cuisine, DemoVoucher} from "./ClientCartDemoData";
interface props {
    MobileNumber?: string
};

const ClientCartForm: React.FC<props> = () => {
    const [cuisines, setCuisines] = useState<Cuisine[]>(ClientCartDemoData);
    const [voucherSelected, setVoucherSelected] = useState(false);
    const handleIncrease = (index: number) => {
        const newCuisines = [...cuisines];
        newCuisines[index].Amount += 1;
        setCuisines(newCuisines);
    };
    const handleDecrease = (index: number) => {
        const newCuisines = [...cuisines];
        if (newCuisines[index].Amount > 0) {
            newCuisines[index].Amount -= 1;
            setCuisines(newCuisines);
        }
    };

    const handleMoveToTakeAway = (index: number) => {
      const newCuisines = [...cuisines];
      newCuisines[index].DineType = "Takeaway";
      setCuisines(newCuisines);
    };

    const handleMoveToDineIn = (index: number) => {
        const newCuisines = [...cuisines];
        newCuisines[index].DineType = "Dine In";
        setCuisines(newCuisines);
    }

    const handleSelectVoucher = () => {
        setVoucherSelected(prevState => !prevState);
    }



    const dineInCuisines = cuisines.filter(cuisine => cuisine.DineType === "Dine In");

    const takeAwayCuisines = cuisines.filter(cuisine => cuisine.DineType === "Takeaway");

    return (
        <div className="flex flex-wrap font-lato w-[430px] h-[1623px] bg-[#F5F5F5]">
            <Link to={{pathname: `/`}}>
                <button
                    className="font-bold text-left w-[430px] h-[28.38px] text-[28.38px] pl-[26.07px] mt-[47px]"
                    type="button">
                    X
                </button>
            </Link>
            <div className="font-bold text-left w-[430px] h-9 text-[24px] mt-4 pl-[26px]">
                DemoData Sichuan Cuisine
            </div>
            <hr className="w-[430px] h-[7px] bg-[#E2DEDE] mt-4"/>
            <div className="font-semibold text-left w-[430px] h-9 text-[24px] mt-4 pl-[23px]">
                {DafaultMenuRoutesValues.DineInDefaultValue}
            </div>

            {/*Dine IN Section Start*/}
            <div className="w-[430px] h-[384px] bg-scroll mt-4 overflow-y-scroll">
                <ul>
                    {dineInCuisines.map((cuisine, index) => {
                        const originalIndex = cuisines.findIndex(c => c.Name === cuisine.Name && c.DineType === cuisine.DineType);
                        return (
                            <li key={originalIndex}
                                className="flex flex-wrap w-[384px] h-[128px] bg-scroll mt-4 ml-[22px] font-semibold border-b-[1px] border-b-[#D9D6D6]">
                                <img src={KungPaoChicken}
                                     className="w-[70px] h-[70px] rounded-lg"/>
                                <div className="ml-2 w-[306px] h-[70px]">
                                    <div className="w-[306px] h-[33px] text-[16px] mt-[5px] text-[16px]">
                                        {cuisine.Name}
                                    </div>
                                    <div className="w-[306px] text-[15px] mt-[5px] text-[#4D4D4D]">
                                        ${cuisine.Price}
                                    </div>
                                </div>
                                <div className="flex justify-between w-[430px]">
                                    <button
                                        onClick={() => handleMoveToTakeAway(originalIndex)}
                                        className="w-[162px] h-[34px] rounded-full bg-orange-gradient text-[#FFFFFF]">
                                        Move to {DafaultMenuRoutesValues.TakeAwayDefaultValue}
                                    </button>
                                    <div
                                        className="flex items-center justify-evenly w-[124px] h-[38px] rounded-full bg-[#FF9900]">
                                        <button
                                            onClick={() => handleDecrease(originalIndex)}>
                                            <AiOutlineDelete/>
                                        </button>
                                        <div className="text-[15px]">
                                            {cuisine.Amount}
                                        </div>
                                        <button
                                            onClick={() => handleIncrease(originalIndex)}>
                                            <IoAddOutline/>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex justify-end w-[384px] h-[38px] ml-[22px] mt-4">
                <Link to={{pathname: "/menu"}}
                      className="flex justify-evenly items-center w-[124px] rounded-full bg-[#D9D6D6] text-[15px] font-semibold ">
                    <IoAddOutline/>
                    Add Items
                </Link>
            </div>
            {/*Dine IN Section End*/}

            <hr className="w-[430px] h-[35px] bg-[#E2DEDE] mt-4"/>

            <div className="font-semibold text-left w-[430px] h-9 text-[24px] mt-4 pl-[23px]">
                {DafaultMenuRoutesValues.TakeAwayDefaultValue}
            </div>

            {/*Take Away Section Start*/}
            <div className="w-[430px] h-[384px] bg-scroll mt-4 overflow-y-scroll">
                <ul>
                    {takeAwayCuisines.map((cuisine, index) => {
                        const originalIndex = cuisines.findIndex(c => c.Name === cuisine.Name && c.DineType === cuisine.DineType);
                        return (
                            <li key={originalIndex}
                                className="flex flex-wrap w-[384px] h-[128px] bg-scroll mt-4 ml-[22px] font-semibold border-b-[1px] border-b-[#D9D6D6]">
                                <img src={KungPaoChicken}
                                     className="w-[70px] h-[70px] rounded-lg"/>
                                <div className="ml-2 w-[306px] h-[70px]">
                                    <div className="w-[306px] h-[33px] text-[16px] mt-[5px] text-[16px]">
                                        {cuisine.Name}
                                    </div>
                                    <div className="w-[306px] text-[15px] mt-[5px] text-[#4D4D4D]">
                                        ${cuisine.Price}
                                    </div>
                                </div>
                                <div className="flex justify-between w-[430px]">
                                    <button
                                        className="w-[162px] h-[34px] rounded-full bg-orange-gradient text-[#FFFFFF]"
                                        onClick={() => handleMoveToDineIn(originalIndex)}>
                                        Move to {DafaultMenuRoutesValues.DineInDefaultValue}
                                    </button>
                                    <div
                                        className="flex items-center justify-evenly w-[124px] h-[38px] rounded-full bg-[#FF9900]">
                                        <button
                                            onClick={() => handleDecrease(originalIndex)}>
                                            <AiOutlineDelete/>
                                        </button>
                                        <div className="text-[15px]">
                                            {cuisine.Amount}
                                        </div>
                                        <button
                                            onClick={() => handleIncrease(originalIndex)}>
                                            <IoAddOutline/>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex justify-between w-[384px] h-[38px] ml-[22px] mt-4 text-[15px] font-semibold">
                <div className="flex justify-center items-center w-[134px] h-[34px] bg-[#D9D6D6]">
                    Cook in 1 hour
                </div>
                <Link to={{pathname: "/menu"}}
                      className="flex justify-evenly items-center w-[124px] rounded-full bg-[#D9D6D6]">
                    <IoAddOutline/>
                    Add Items
                </Link>
            </div>
            {/*Take Away Section End*/}

            <hr className="w-[430px] h-[1px] bg-[#D9D6D6] mt-4"/>

            {/*Voucher Section Start*/}
            {voucherSelected? (
                <div className="flex w-[384px] ml-[22px] h-[90px] justify-between items-center"
                     onClick={handleSelectVoucher}>
                    <div className="flex items-center w-[340px] h-[42px] text-[16px] font-semibold">
                        <AiOutlineGift style={{width: "20px", height: "20px", color: "EF7221"}}/>
                        <p className="pl-[15px]">Vouchers <br/><span className="text[14px] text-[#4D4D4D]">Choose one and apply</span>
                        </p>
                    </div>
                    <GrNext style={{width: "19px", height: "19px", color: "D9D6D6"}}/>
                </div>
            ) : (
                <div className="flex w-[430px] h-[90px] items-center justify-center bg-orange-gradient font-semibold text-[20px] text-[#FFFFFF]"
                     onClick={handleSelectVoucher}>
                    YAY! You saved ${DemoVoucher.Value}
                </div>
            )}
            {/*Voucher Section End*/}

            <hr className="w-[430px] h-[1px] bg-[#D9D6D6]"/>
        </div>

    );
};

export default ClientCartForm;
