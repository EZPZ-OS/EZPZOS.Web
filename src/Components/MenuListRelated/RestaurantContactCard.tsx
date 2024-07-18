import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LogoWithBG from "../../Assets/Images/LogoWithBG.png";
import { useNavigate } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { DafaultMenuRoutesValues } from "ezpzos.core";

interface RestaurantContactCardProps {
  name: string;
  address: string;
  tags: string[];
  onCallStaff: () => void;
}

const RestaurantContactCard: React.FC<RestaurantContactCardProps> = ({
  name,
  address,
  tags,
  onCallStaff,
}) => {
  const navigate = useNavigate();

  const handleSelect = (index: number) => {
    const tabName =
      index === 0
        ? DafaultMenuRoutesValues.DineInRouteDefaultValue
        : DafaultMenuRoutesValues.TakeAwayRouteDefaultValue;
    navigate(`/${tabName}`);
  };

  return (
    <div className="px-4 py-2 bg-white rounded-lg max-w-md mx-auto">
      <div className="flex items-center justify-between">
        <div className="">
          <h2 className="text-[30px] font-extrabold text-gray-900 ">{name}</h2>
          <div className="text-gray-500 flex items-center">
            <p className="text-sm pt-2">{address}</p>
            <IoChevronForward className="mx-1 pt-2" />
          </div>
        </div>
        <img
          src={LogoWithBG}
          alt="Restaurant Logo"
          className="w-[120px] h-[120px] object-cover rounded-sm shadow-md shadow-[#C1C1C1] -translate-y-8"
        />
      </div>
      <div className="mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-clip-text text-transparent font-bold bg-brown-gradient text-sm px-1 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-2 flex justify-between">
        {/* MenuTabs to switch between */}
        <Tabs className="w-[237px] h-[40px]" onSelect={handleSelect}>
          <TabList className="flex justify-center items-center text-center border-2 rounded-3xl border-transparent bg-primary-gray">
            <Tab
              className="w-[120px] list-none py-1 px-1 cursor-pointer text-[#5C3434] bg-primary-gray border-2 rounded-3xl border-primary-gbg-primary-gray transition-colors duration-300"
              selectedClassName="bg-white text-[#5C3434] border-primary-gbg-primary-gray"
            >
              {DafaultMenuRoutesValues.DineInDefaultValue}
            </Tab>
            <Tab
              className="w-[120px] list-none py-1 px-1 cursor-pointer text-[#5C3434] bg-primary-gray border-2 rounded-3xl border-primary-gbg-primary-gray transition-colors duration-300"
              selectedClassName="bg-white text-[#5C3434] border-primary-gbg-primary-gray"
            >
              {DafaultMenuRoutesValues.TakeAwayDefaultValue}
            </Tab>
          </TabList>
        </Tabs>
        <button
          onClick={onCallStaff}
          className="bg-[#AD98A0] text-white px-4 py-1 rounded-3xl w-[120px] h-[40px]"
        >
          Call Staff
        </button>
      </div>
    </div>
  );
};

export default RestaurantContactCard;
