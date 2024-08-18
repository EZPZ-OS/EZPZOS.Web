import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";
import Switch from 'react-switch'
import { DefaultBookConfirmationValues, BookConfirmInfo } from "ezpzos.core";

const BookConfirmPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [notesValue, setNotesValue] = useState('')

    const [textUpdateVal, setTextUpdateVal] = useState(true)
    const [receiveOfferVal, setReceiveOfferVal] = useState(true)

    const handlePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (/^[0-9]$/.test(value)) {
            setPhoneNumber(value)
		}
    }

    const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFirstName(value);
    }
    const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setLastName(value);
    }
    const handleNotes = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNotesValue(value);
    }

    const handleTextUpdateChange = (checked: boolean) => {
        setTextUpdateVal(checked)
    }
    const handleReceiveOfferChange = (checked: boolean) => {
        setReceiveOfferVal(checked)
    }

    const handleContinue = () => {
        // request api
    }

    return (
        <div className="relative h-screen bg-neutral-500 bg-gradient-to-br from-[#E78B57] to-[#4ec2e583]">
            <div className="absolute left-5 top-5 h-[38px] text-2xl flex flex-row items-center">
                <FaArrowLeftLong fontWeight={400} className="text-white"/>
                <Link to="/">
                    <span className="ml-2 text-white">{DefaultBookConfirmationValues.Back}</span>
                </Link>
            </div>
            <div className="absolute top-16 left-5 w-[calc(100vw_-_40px)] m-auto bg-white rounded-lg">
                <section className="ml-4 mr-4 mt-3 mb-3">
                    <div className="font-bold text-[20px]">{BookConfirmInfo.DishName}</div>
                    <div className="flex flex-row mt-3 items-center">
                        <GoPerson />
                        <span className="text-[#FB6300] ml-2">{BookConfirmInfo.PeopleNum} {DefaultBookConfirmationValues.PeopleText}</span>
                    </div>
                    <div className="flex flex-row mt-1 items-center">
                        <IoCalendarOutline />
                        <span className="text-[#FB6300] ml-2">{BookConfirmInfo.Date}</span>
                    </div>
                    <div className="flex flex-row mt-1 items-center">
                        <IoTimeOutline />
                        <span className="text-[#FB6300] ml-2">{BookConfirmInfo.Time}</span>
                    </div>
                </section>
                <section className="ml-4 mr-4 mt-3">
                    <h2 className="font-bold">{DefaultBookConfirmationValues.KnowTitle}</h2>
                    <div className="text-sm">{BookConfirmInfo.Introdution}</div>
                </section>
                <section className="ml-4 mr-4 mt-3">
                    <h2 className="font-bold">{DefaultBookConfirmationValues.PhoneText}</h2>
                    <div className="flex flex-row bg-[#D7D7D7] rounded-md">
                        <span className="w-16 h-8 leading-8 text-center bg-[#C0C0C0] color-[#422626] rounded-md">{DefaultBookConfirmationValues.CodeText}</span>
                        <input className="h-8 bg-[#D7D7D7] px-2 outline-transparent" placeholder={DefaultBookConfirmationValues.PhonePlaceHolder} onChange={event => handlePhoneNumber(event)}/>
                    </div>
                </section>
                <section className="ml-4 mr-4 mt-3 flex flex-column justify-between">
                    <div className="flex flex-col">
                        <h2 className="font-bold">{DefaultBookConfirmationValues.FirstNameText}</h2>
                        <input className="h-8 bg-[#D7D7D7] outline-transparent rounded-md" onChange={event => handleFirstName(event)}/>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold">{DefaultBookConfirmationValues.LastNameText}</h2>
                        <input className="h-8 bg-[#D7D7D7] outline-transparent rounded-md" onChange={event => handleLastName(event)}/>
                    </div>
                </section>
                <section className="ml-4 mr-4 mt-3">
                    <div className="flex flex-col">
                        <h2 className="font-bold">{DefaultBookConfirmationValues.NotesText}</h2>
                        <textarea className="h-8 bg-[#D7D7D7] outline-transparent rounded-md px-1" onChange={event => handleNotes(event)}></textarea>
                    </div>
                </section>
                <section className="ml-4 mr-4 mt-3 flex flex-row justify-between items-center">
                    <h2>{DefaultBookConfirmationValues.BookingText}</h2>
                    <Switch onChange={handleTextUpdateChange} checked={textUpdateVal} uncheckedIcon={false} checkedIcon={false} width={45} height={19} onColor={'#EF9D52'} offHandleColor={'#D9D9D9'}/>
                </section>
                <section className="ml-4 mr-4 mt-5 flex flex-row justify-between items-center">
                    <h2>{DefaultBookConfirmationValues.ReceiveText}</h2>
                    <Switch onChange={handleReceiveOfferChange} checked={receiveOfferVal} uncheckedIcon={false} checkedIcon={false} width={45} height={19} onColor={'#EF9D52'} offHandleColor={'#D9D9D9'}/>
                </section>
                <section className="w-[calc(100%_-_30px)] m-auto mt-3 h-1 bg-[#E2DEDE]"></section>
                <section className="w-[288px] h-10 leading-10 text-white text-center bg-orange-gradient m-auto mt-4 mb-4 rounded-xl" onClick={handleContinue}>{DefaultBookConfirmationValues.BtnText}</section>
            </div>
        </div>
    )
}

export default BookConfirmPage