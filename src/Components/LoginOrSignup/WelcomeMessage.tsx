import { LoginSignupDataProp } from "../../Pages/LoginOrSignup/LoginOrSignup";
import {DefaultLoginSignupValues} from "ezpzos.core";



const WelcomeMessage=(data:LoginSignupDataProp)=> {

  const isLogin = data.isLogin
  return (
        <div className="mt-[80px] ml-[22px]">
         <p className="text-lg font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] inline-block text-transparent bg-clip-text">
           {isLogin ?  DefaultLoginSignupValues.LoginHeading : DefaultLoginSignupValues.SignupHeading}
          </p>
         <p className="ml-[7px] bg-gradient-to-r from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text">
          {isLogin ? DefaultLoginSignupValues.LoginSubtitle : DefaultLoginSignupValues.SignupSubtitle}
            </p>
            </div>
  );
}

export default WelcomeMessage;
