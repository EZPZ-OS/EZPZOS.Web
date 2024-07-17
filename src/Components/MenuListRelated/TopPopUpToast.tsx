import React from "react";
import { ToastContentProps } from "react-toastify";
import { IoCheckmarkCircle } from "react-icons/io5";

interface TopPopUpToastProps {
  message: string;
  closeToast?: () => void;
  toastProps?: ToastContentProps<{}>;
}

const TopPopUpToast: React.FC<TopPopUpToastProps> = ({
  message,
  closeToast,
}) => {
  return (
    <div className="flex items-center p-4">
      <div className="text-[#235DB5]">{message}</div>
      <div className="ml-4">
        <IoCheckmarkCircle className="text-green-500" size={36} />
      </div>
    </div>
  );
};

export default TopPopUpToast;
