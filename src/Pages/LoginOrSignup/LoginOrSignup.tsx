import React from "react";
import WelcomeMessage from "../../Components/LoginOrSignup/WelcomeMessage";
import ContactForm from "../../Components/LoginOrSignup/ContactForm";
import Policy from "../../Components/LoginOrSignup/Policy";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-router-dom";


/**
 * This interface defining the properties for the LoginSignupDataProp
 * @param isLogin pass a "isLogin" mock boolean value into LoginOrSignup Page, check if the customer is login or not(!login===signup)
 */
export interface LoginSignupDataProp {
	isLogin: Boolean;
}


const LoginSignupPage: React.FC<LoginSignupDataProp> = ({ isLogin = true }) => {


	return (
		<div className="flex h-screen w-screen bg-hero-pattern bg-cover relative overflow-hidden">
			<div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41% to-[#000000ce] to-88%">
				<div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41% to-[#000000ce] to-88% ">
					<Link to={"/"}>
						<div className="flex w-full justify-end	">
							<RiCloseLargeLine className="absolute  text-white text-[35px]  mt-10 mr-[20px] " />
						</div>
					</Link>

					{/*This is WelcomeMessage session, it decides what to show on main title when the customer try to login/sign up respectfully*/}
					<WelcomeMessage isLogin={isLogin} />

					{/*This is ContactForm session, it contains input boxes for user to enter its phone number, or choose the google login.*/}
					<ContactForm isLogin={isLogin} />
					{/*This is Policy session*/}
					<Policy />
				</div>
			</div>
		</div>
	);
};

export default LoginSignupPage;
