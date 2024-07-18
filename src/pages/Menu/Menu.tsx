import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import BottomNavBar from "../../Components/BottomNavBar";

const Menu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tableNumber, setTableNumber] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tableNumber = params.get("tableNumber");
    setTableNumber(tableNumber);
  }, [location.search]);

  const BgGradientColour =
    "bg-gradient-to-r from-[#FFB682F5] via-[#F8A27AF5] to-[#F28C83F5]";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <IoChevronBackCircleSharp
        onClick={() => navigate(-1)}
        className="absolute top-14 left-6 text-black text-4xl cursor-pointer z-50"
        size={60}
      />
      <h1 className="text-3xl mb-4">
        This is menu page place holder, for testing QR feature purpose
      </h1>
      <div className="mb-4">Table Number: {tableNumber}</div>
      <div className="mb-4">
        <button
          className={`px-4 py-2 ${BgGradientColour} text-white rounded m-2`}
        >
          Add Item 1
        </button>
        <button
          className={`px-4 py-2 ${BgGradientColour} text-white rounded m-2`}
        >
          Add Item 2
        </button>
      </div>
      <div>
        <button
          className={`px-4 py-2 ${BgGradientColour} text-white rounded m-2`}
        >
          Place Order
        </button>
      </div>
      <BottomNavBar isClient={true}/>
    </div>
  );
};

export default Menu;
