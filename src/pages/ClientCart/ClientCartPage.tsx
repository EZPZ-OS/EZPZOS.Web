import React from "react";
import BottomNavBar from "../../Components/BottomNavBar";
import ClientCartForm from "../../Components/ClientCartComponents/ClientCartForm";
const ClientCartPage: React.FC = () => {
    return (
        <div className="flex h-screen w-screen bg-hero-pattern bg-cover relative overflow-hidden justify-center">
            <div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
                <div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
                    <ClientCartForm />
                </div>
                <hr className="w-[430px] h-[7px] "/>
                <BottomNavBar isClient={true}/>
            </div>
        </div>
    );
};

export default ClientCartPage;
