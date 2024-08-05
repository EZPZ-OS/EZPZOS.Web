import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

interface props {
	MobileNumber?: string;
}

const OTPForm: React.FC<props> = ({ MobileNumber = "0473001475" }) => {
	const navigate = useNavigate();

	/*Verification Code Input Script, automatically jump to next input area*/
	const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
	const [pin, setPin] = useState<string[]>(Array(6).fill(""));
	const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		if (/^[0-9]$/.test(value)) {
			// Only accept numeric input
			const newPin = [...pin];
			newPin[index] = value;
			setPin(newPin);

			if (value.length === 1 && index < inputsRef.current.length - 1) {
				// Move to the next input
				inputsRef.current[index + 1]?.focus();
			}
		}
	};

	const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Backspace" && index > 0 && event.currentTarget.value === "") {
			// Move to the previous input
			inputsRef.current[index - 1]?.focus();
		}
	};

	// For post six-digit message code to back end for Verification
	const handleSubmit = () => {
		const pinCode = pin.join("");
		console.log(pinCode);
	};
	/*Verification Code Input Script end*/

	/*Submit Button Script*/
	const isPinComplete = pin.join("").length === 6;

	/*Submit Button Script End*/

	return (
		<div className="flex flex-col items-center w-full h-[880px] bg-[#F3F3F3] rounded-t-lg shadow-lg">
			<div className="w-full flex items-center">
				<button onClick={() => navigate("/signup")} className="">
					<IoCloseOutline size={50} className="drop-shadow-md m-4" />
				</button>
				<p className="text-[24px] font-semibold text-center p-4">Confirm your number</p>
			</div>

			<hr className="border-t-4 border-[#EEEBEB]" />
			{/* main info section below */}

			{/* Pin Input Form */}
			<div className="p-4 w-full flex flex-col items-center justify-center">
				<p className="mb-4 text-[15px] self-start">Enter the code we send over SMS to {MobileNumber}:</p>
				<div className="w-[370px] border-[2.5px] border-[#ED897F] pt-1.5 pb-3 rounded-lg my-8">
					<div className="flex items-center justify-center gap-3 bg-[#F3F3F3] ">
						{Array.from({ length: 6 }).map((_, index) => (
							<input
								key={index}
								type="text"
								pattern="\d*"
								maxLength={1}
								className="w-10 h-10 text-center text-[24px] bg-[#F3F3F3] font-lato text-[#515151] font-semibold border-b-2 border-b-[#D9D6D6] focus:outline-none"
								ref={el => (inputsRef.current[index] = el)}
								onChange={event => handleInputChange(index, event)}
								onKeyDown={event => handleKeyDown(index, event)}
							/>
						))}
					</div>
				</div>
				<p className="mt-4 self-start text-[15px]">
					Didn’t get an SMS? <span className="underline font-semibold">Send again</span>
				</p>
			</div>

			{/* Submit Button */}
			<div className="w-full flex flex-col mt-36">
				<hr className="border-t-4 border-[#EEEBEB]" />

				<button
					className={`h-[50px] w-[370px] rounded-lg mt-6 self-center ${
						isPinComplete ? "bg-blue-gradient text-white" : "bg-[#D1D4DB] text-white"
					}`}
					type="button"
					disabled={!isPinComplete}
					onClick={handleSubmit}
				>
					Continue
				</button>
			</div>
		</div>
	);
};

export default OTPForm;
