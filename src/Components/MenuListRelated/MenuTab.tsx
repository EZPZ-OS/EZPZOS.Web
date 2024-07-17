import React from "react";

// Define the interface for the props
interface MenuTabProps {
  tableNumber: string | null;
  selectedTab: string | null;
}

const MenuTab: React.FC<MenuTabProps> = ({ tableNumber, selectedTab }) => {
  return (
    <div>
      <h1 className="text-3xl mb-4">
        This is menu page placeholder, for testing purpose
      </h1>
      <h1 className="text-3xl mb-4 text-blue-500">
        you're on **{selectedTab}**!
      </h1>
      <div className="mb-4">Table Number: {tableNumber}</div>
    </div>
  );
};

export default MenuTab;
