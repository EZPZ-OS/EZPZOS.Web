import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNavBar from "../../Components/BottomNavBar";
import RestaurantContactCard from "../../Components/MenuListRelated/RestaurantContactCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../../Components/NavBar";
import TopPopUpToast from "../../Components/MenuListRelated/TopPopUpToast";
import MenuTab from "../../Components/MenuListRelated/MenuTab";
import { DafaultMenuRoutesValues } from "ezpzos.core";

const Menu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tableNumber, setTableNumber] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>(
    DafaultMenuRoutesValues.DineInDefaultValue
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tableNumber = params.get(
      DafaultMenuRoutesValues.TableNumberDefaultValue
    );
    setTableNumber(tableNumber);

    if (
      location.pathname.includes(
        DafaultMenuRoutesValues.DineInRouteDefaultValue
      )
    ) {
      setSelectedTab(DafaultMenuRoutesValues.DineInDefaultValue);
      showToast(DafaultMenuRoutesValues.DineInToastDefaultValue);
    } else if (
      location.pathname.includes(
        DafaultMenuRoutesValues.TakeAwayRouteDefaultValue
      )
    ) {
      setSelectedTab(DafaultMenuRoutesValues.TakeAwayDefaultValue);
      showToast(DafaultMenuRoutesValues.TakeAwayToastDefaultValue);
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
        {selectedTab === DafaultMenuRoutesValues.DineInDefaultValue && (
          <>
            <MenuTab tableNumber={tableNumber} selectedTab={selectedTab} />
          </>
        )}
        {selectedTab === DafaultMenuRoutesValues.TakeAwayDefaultValue && (
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
