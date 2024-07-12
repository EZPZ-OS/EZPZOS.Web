import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import ContactForm from "./components/ContactForm";
import Policy from "./components/Policy";

const SignupPage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-hero-pattern bg-cover relative overflow-hidden">
      <div className="h-screen w-screen bg-gradient-to-tl from-[#48321E00] to-[#000000]">
        <WelcomeMessage />
        <ContactForm />
        <Policy />
      </div>
    </div>
  );
};

export default SignupPage;
