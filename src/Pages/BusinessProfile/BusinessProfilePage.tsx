import React from "react";
import BusinessProfileForm from "../../Components/BusinessProfileRelated/BusinessProfileForm";
const BusinessProfilePage: React.FC = () => {
    return (
        <div className="flex justify-center h-screen w-screen bg-hero-pattern bg-cover relative bg-scroll ">
            <BusinessProfileForm />
        </div>
    );
};

export default BusinessProfilePage;