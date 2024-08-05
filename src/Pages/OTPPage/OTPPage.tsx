import React from "react";

import OTPForm from "../../Components/OTP/OTPForm";

const OTPPage: React.FC = () => {
	return (
		<div className="flex h-screen w-screen bg-hero-pattern bg-cover relative overflow-hidden">
			<div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
				<div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
					<div className="fixed inset-0 flex items-end z-50">
						<div className="w-full">
							<OTPForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OTPPage;
