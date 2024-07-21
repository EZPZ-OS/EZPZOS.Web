// File: src/Components/MenuListRelated/RestaurantContactDetails.tsx
import React, { useState } from "react";
import AddressOnGoogleMap from "./AddressOnGoogleMap";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  MdAccessTime,
  MdContentCopy,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import TagList from "./TagList";

interface RestaurantContactDetailsProps {
  name: string;
  address: string;
  phone: string;
  hours: string[];
  tags: string[];
  onClose: () => void;
}
/**
 * @param name - The name of the business {@link RestaurantContactDetailsProps.name}
 * @param address - The address of the business {@link RestaurantContactDetailsProps.address}
 * @param phone - The contact phone number of the business {@link RestaurantContactDetailsProps.phone}
 * @param hours - An array of business hours {@link RestaurantContactDetailsProps.hours}
 * @param tags - An array of tags {@link RestaurantContactDetailsProps.tags}
 * @param onClose - Callback function to close the contact details modal {@link RestaurantContactDetailsProps.onClose}
 */

const RestaurantContactDetails: React.FC<RestaurantContactDetailsProps> = ({
  name,
  address,
  phone,
  hours,
  tags,
  onClose,
}) => {
  const [showHours, setShowHours] = useState(false);
  const [showAllergyInfo, setShowAllergyInfo] = useState(false);

  const toggleHours = () => setShowHours(!showHours);
  const toggleAllergyInfo = () => setShowAllergyInfo(!showAllergyInfo);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-end z-50">
      <div className="bg-white w-full max-w-md rounded-t-lg">
        <div className="relative">
          <AddressOnGoogleMap />
          <button onClick={onClose} className="absolute top-2 right-2 black">
            <IoCloseOutline size={50} className="drop-shadow-md m-4" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-[24px] font-bold">{name}</h2>
          <TagList tags={tags} /> {/* Use the TagList component */}
        </div>
        <hr className="border-t-4 border-[#EEEBEB] my-4" />
        <div className="my-6">
          <div className="flex items-center justify-between p-4">
            <FaLocationDot />
            <p className="px-4">{address}</p>
            <MdContentCopy />
          </div>
          <div className="p-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={toggleHours}
            >
              <div className="flex items-center">
                <MdAccessTime />
                <span className="ml-2">Hours</span>
              </div>
              {showHours ? <MdExpandLess /> : <MdExpandMore />}
            </div>
            {showHours && (
              <ul className="mt-2">
                {hours.map((hour, index) => (
                  <li key={index}>{hour}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center p-4">
            <BsFillTelephoneFill />
            <p className="ml-2">{phone}</p>
          </div>
          <div className="p-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={toggleAllergyInfo}
            >
              <div className="flex items-center">
                <GiThreeLeaves />
                <span className="ml-2">Allergy Info</span>
              </div>
              {showAllergyInfo ? <MdExpandLess /> : <MdExpandMore />}
            </div>
            {showAllergyInfo && (
              <p className="mt-2">place holder for Allergy Info</p>
            )}
          </div>
          <div className="mt-8 mb-[50px] flex justify-center">
            <button
              onClick={() =>
                window.confirm(`Call ${phone}?`) && window.open(`tel:${phone}`)
              }
              className="bg-black text-white px-4 py-2 rounded-lg h-[45px] w-[355px]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantContactDetails;
