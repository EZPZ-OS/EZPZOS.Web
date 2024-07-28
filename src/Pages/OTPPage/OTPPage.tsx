import React from "react";
import OptForm from "../../Components/OptFormRelated/OptForm";
import WelcomeMessage from "../../Components/SignUp/WelcomeMessage";
import Policy from "../../Components/SignUp/Policy";

const OTPPage: React.FC = () => {
	return (
		<div className="flex h-screen w-screen bg-hero-pattern bg-cover relative overflow-hidden">
			<div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
				<div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
					<WelcomeMessage />
					<OptForm />
					<Policy />
				</div>
			</div>
		</div>
	);
};

export default OTPPage;
