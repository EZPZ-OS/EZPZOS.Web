import React from 'react';

const WelcomeBackMessage: React.FC = () => {
  return (
    <div className="mt-[90px] ml-[22px]">
      <p className="text-lg font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] inline-block text-transparent bg-clip-text">Welcome Back</p>
      <p className="ml-[7px] bg-gradient-to-r from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text">Sign in to continue :)</p>
    </div>
  );
};

export default WelcomeBackMessage;

