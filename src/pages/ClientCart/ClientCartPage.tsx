import React from "react";
import BottomNavBar from "../../Components/BottomNavBar";
import ClientCartForm from "../../Components/ClientCartComponents/ClientCartForm";
import WelcomeMessage from "../../Components/SignUp/WelcomeMessage";
import Policy from "../../Components/SignUp/Policy";
const ClientCartPage: React.FC = () => {
    return (
        <div className="flex justify-center h-screen w-screen bg-hero-pattern bg-cover relative bg-scroll ">
            <ClientCartForm />
        </div>
    );
};

export default ClientCartPage;
