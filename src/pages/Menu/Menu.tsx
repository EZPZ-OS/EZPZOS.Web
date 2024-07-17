import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNavBar from "../../Components/BottomNavBar";
import RestaurantContactCard from "../../Components/MenuListRelated/RestaurantContactCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../../Components/NavBar";
import TopPopUpToast from "../../Components/MenuListRelated/TopPopUpToast";
import MenuTab from "../../Components/MenuListRelated/MenuTab";

const Menu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tableNumber, setTableNumber] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("Dine in");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tableNumber = params.get("tableNumber");
    setTableNumber(tableNumber);

    //This is to control notification
    if (location.pathname.includes("menu-dinein")) {
      setSelectedTab("Dine in");
      showToast("You are now viewing the Dine In menu");
    } else if (location.pathname.includes("menu-takeaway")) {
      setSelectedTab("Take away");
      showToast("You are now viewing the Take Away menu");
    }
  }, [location.search, location.pathname]);

  const handleCallStaff = () => {
    console.log("Call Staff clicked");
  };

  const showToast = (message: string) => {
    toast(
      <TopPopUpToast message={message} closeToast={() => toast.dismiss()} />,
      { autoClose: 3000 }
    );
  };

  return (
    <div className="flex flex-col items-center h-screen relative">
      <NavBar />
      <RestaurantContactCard
        name="DemoData Sichuan Cuisine"
        address="170 LiverPool ST, Hobart 7000"
        tags={["Hot food", "Chinese food", "Crazy Tuesday"]}
        onCallStaff={handleCallStaff}
      />
      <div className="w-full mt-4">
        {selectedTab === "Dine in" && (
          <>
            <MenuTab tableNumber={tableNumber} selectedTab={selectedTab} />
          </>
        )}
        {selectedTab === "Take away" && (
          <>
            <MenuTab tableNumber={tableNumber} selectedTab={selectedTab} />
          </>
        )}
      </div>
      <BottomNavBar />
      <ToastContainer />
    </div>
  );
};

export default Menu;
