import React from "react";
import WelcomeMessage from "../../Components/SignUpRelated/WelcomeMessage";
import OptForm from "../../Components/OptFormRelated/OptForm";
import Policy from "../../Components/SignUpRelated/Policy";

const OptPage: React.FC = () => {
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

export default OptPage;
