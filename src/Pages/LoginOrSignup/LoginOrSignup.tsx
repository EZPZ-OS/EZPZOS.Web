import React from "react";
import WelcomeMessage from "../../Components/LoginOrSignup/WelcomeMessage";
import ContactForm from "../../Components/LoginOrSignup/ContactForm";
import Policy from "../../Components/LoginOrSignup/Policy";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export interface LoginSignupDataProp{
       isLogin:Boolean

}

const LoginSignupPage: React.FC <LoginSignupDataProp>=({ 
       isLogin=true
})=> {
  
    return (
      <div className="flex h-screen w-screen bg-hero-pattern bg-cover relative overflow-hidden">
        <div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41% to-[#000000ce] to-88%">

          <div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41% to-[#000000ce] to-88% ">
            
          <Link to={"/"}>
          <div className="flex w-full justify-end	"> 
            <RiCloseLargeLine  className="absolute mr-0 text-white text-[35px]  mt-10 mr-[20px] "/>
          
                </div>
                </Link>
                
        {/*This is WelcomeMessage session, it decides what to show on main title when the customer try to login/sign up respectfully*/}
          <WelcomeMessage isLogin={isLogin} />
        
        {/*This is ContactForm session, it decides what to show on main title when the customer try to login/sign up respectfully*/}
            <ContactForm isLogin={isLogin} />
          {/*This is Policy session, it shows [*/}
            <Policy />
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginSignupPage;
  