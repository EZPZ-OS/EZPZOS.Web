const WelcomeMessage: React.FC<{ isLogin?: boolean }> = ({ isLogin }) => {
  return (
    <div className="mt-[90px] ml-[22px]">
      <p className="text-lg font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] inline-block text-transparent bg-clip-text">
        {isLogin ? "Welcome Back" : "Join Us Today"}
      </p>
      <p className="ml-[7px] bg-gradient-to-r from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text">
        {isLogin ? "Sign in to continue :)" : "To get more insight :)"}
      </p>
    </div>
  );
};

export default WelcomeMessage;
