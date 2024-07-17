import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LogoWithBG from "../../Assets/Images/LogoWithBG.png";
import { useNavigate } from "react-router-dom";

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
    const tabName = index === 0 ? "menu-dinein" : "menu-takeaway";
    navigate(`/${tabName}`);
  };

  return (
    <div className="px-6 py-2 bg-white rounded-lg max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
          <p className="text-gray-500">{address}</p>
        </div>
        <img
          src={LogoWithBG}
          alt="Restaurant Logo"
          className="w-24 h-24 object-cover rounded-sm shadow-md shadow-[#C1C1C1] -translate-y-8"
        />
      </div>
      <div className="mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#854f29f5] via-[#F8A27AF5] to-[#f45a4cf5] text-sm px-1 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <Tabs className="w-[235px]" onSelect={handleSelect}>
          <TabList className="flex justify-center border-2 rounded-3xl border-transparent bg-gray-300">
            <Tab
              className="list-none py-2 px-6 cursor-pointer text-gray-600 bg-gray-300 border-2 rounded-3xl border-gray-300 hover:text-gray-600 hover:bg-white transition-colors duration-300"
              selectedClassName="border-[#FFB682] bg-white text-[#FFB682]"
            >
              Dine in
            </Tab>
            <Tab
              className="list-none py-2 px-6 cursor-pointer text-gray-600 bg-gray-300 border-2 rounded-3xl border-gray-300 hover:text-gray-600 hover:bg-white transition-colors duration-300"
              selectedClassName="border-transparent text-[#FFB682]"
            >
              Take away
            </Tab>
          </TabList>
        </Tabs>
        <button
          onClick={onCallStaff}
          className="bg-[#AD98A0] text-white px-4 py-2 rounded-3xl"
        >
          Call Staff
        </button>
      </div>
    </div>
  );
};

export default RestaurantContactCard;
