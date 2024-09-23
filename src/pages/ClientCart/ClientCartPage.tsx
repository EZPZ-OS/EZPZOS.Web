import React from "react";
import ClientCartForm from "../../Components/ClientCartComponents/ClientCartForm";
const ClientCartPage: React.FC = () => {
	return (
		<div className="flex justify-center h-screen w-screen bg-hero-pattern bg-cover relative bg-scroll ">
			<ClientCartForm />
		</div>
	);
};

export default ClientCartPage;
