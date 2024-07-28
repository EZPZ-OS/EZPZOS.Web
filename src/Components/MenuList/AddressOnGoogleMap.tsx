import React from "react";
import { GOOGLE_MAPS_API_KEY } from "../../Common/Constants";

interface AddressOnGoogleMapProps {
	address: string;
}

const AddressOnGoogleMap: React.FC<AddressOnGoogleMapProps> = ({ address }) => {
	const encodedAddress = encodeURIComponent(address);
	const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=18&size=600x300&markers=color:red%7C${encodedAddress}&key=${GOOGLE_MAPS_API_KEY}`;

	return (
		<div className="h-[230px] w-full max-w-md rounded-t-lg overflow-hidden">
			<img src={mapUrl} alt={`Map showing location of ${address}`} className="w-full h-full object-cover" />
		</div>
	);
};

export default AddressOnGoogleMap;
