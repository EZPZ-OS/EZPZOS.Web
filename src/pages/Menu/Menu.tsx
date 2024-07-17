import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import BottomNavBar from "../../Components/BottomNavBar";
import RestaurantContactCard from "../../Components/MenuListRelated/RestaurantContactCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../../Components/NavBar";

const Menu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tableNumber, setTableNumber] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("Dine in");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tableNumber = params.get("tableNumber");
    setTableNumber(tableNumber);

    if (location.pathname.includes("menu-dinein")) {
      setSelectedTab("Dine in");
      toast.info("You are now viewing the Dine In menu.");
    } else if (location.pathname.includes("menu-takeaway")) {
      setSelectedTab("Take away");
      toast.info("You are now viewing the Take Away menu.");
    }
  }, [location.search, location.pathname]);

  const BgGradientColour =
    "bg-gradient-to-r from-[#FFB682F5] via-[#F8A27AF5] to-[#F28C83F5]";

  const handleCallStaff = () => {
    console.log("Call Staff clicked");
  };

  return (
    <div className="flex flex-col items-center h-screen relative">
      <NavBar />
      <RestaurantContactCard
        name="DemoData Sichuan Cuisine"
        address="xxx st, xxxx, xxxx TAS 7050"
        tags={["Hot food", "Chinese food", "Crazy Tuesday"]}
        onCallStaff={handleCallStaff}
      />
      <div className="w-full mt-4">
        {selectedTab === "Dine in" && (
          <>
            <h1 className="text-3xl mb-4">
              This is menu page placeholder, for testing purpose
            </h1>
            <h1 className="text-3xl mb-4 text-blue-500">
              you're on /menu-dinein
            </h1>
            <div className="mb-4">Table Number: {tableNumber}</div>
          </>
        )}
        {selectedTab === "Take away" && (
          <>
            <h1 className="text-3xl mb-4">
              This is menu page placeholder, for testing purpose
            </h1>
            <h1 className="text-3xl mb-4 text-red-500">
              you're on /menu-takeaway
            </h1>
            <div className="mb-4">Table Number: {tableNumber}</div>
          </>
        )}
      </div>
      <BottomNavBar />
      <ToastContainer />
    </div>
  );
};

export default Menu;
