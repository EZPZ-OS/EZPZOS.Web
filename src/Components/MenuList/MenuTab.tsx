import React from "react";
import HotSales from "../HotSales/HotSales";
// Define the interface for the props
interface MenuTabProps {
	tableNumber: string | null;
	selectedTab: string | null;
}
/**
 * This interface defining the properties for the MenuTabProps
 * @param tableNumber is the table number extracted from /scan page {@link MenuTabProps.tableNumber}
 * @param selectedTab is to show which table customer is currently on {@link MenuTabProps.selectedTab}
 */

const MenuTab: React.FC<MenuTabProps> = ({ tableNumber, selectedTab }) => {
	return (
		<div>
			<HotSales />
		</div>
	);
};

export default MenuTab;
