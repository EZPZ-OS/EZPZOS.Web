import React from 'react';

const Policy: React.FC = () => {
  return (
    <div className="max-w-screen-sm text-center mx-auto">
            <p className="text-[#DCDCDCD6] mt-20 font-bold">By continuing, you agree to our</p>
            <div className="flex justify-around text-[#777373] text-[14px] mt-2 font-bold underline decoration-solid">
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="content-policies">Content policies</a>
            </div>
        </div>

  );
};

export default Policy;
