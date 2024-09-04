import ClientAvatar from "../../Assets/Icons/ClientAvatar.png";
import { MdOutlineEdit } from "react-icons/md";
import { DefaultPersonalInfoPageValues } from "ezpzos.core";
import { logout } from "../../Store/AuthSlice";
import AlertTag from "../AlertTag";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react"

interface UserInfoCardProps {
	avatar: string | null | undefined;
	username: string | null | undefined;
	phone: string | null | undefined;
	email: string | null | undefined;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ avatar, username, phone, email }) => {
	const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const handleLogout = () => {
        dispatch(logout());
        setShowAlert(true);
        setTimeout(() => {
            navigate('/'); 
        }, 3000);
    }

	return (
		<div
			className="mx-auto bg-[#F3F3F3] w-full max-w-[374px] h-[700px] rounded-3xl relative -top-[40px]"
			style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
		>
			{/* TODO: change avatar to user.avatar when backend is fully setup */}
			<img src={ClientAvatar} className="ml-[42px] mt-[63px] w-[107px] h-[107px]"></img>
			<MdOutlineEdit
				className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] relative bottom-[33px] left-[123px]"
				style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
			/>
			<div className="w-full h-[8px] bg-[#E2DEDE]"></div>
			<div className="ml-[40px] mt-[18px]">
				<p className="text-[24px] font-bold ">{DefaultPersonalInfoPageValues.InfoTitle}</p>
				<div className="mt-[15px] ml-[3px] w-full relative">
					<label className="text-[18px] font-bold">{DefaultPersonalInfoPageValues.NameLabel}</label>
					<p className="text-[#898686] text-[16px]">{username}</p>
					<MdOutlineEdit
						className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] absolute bottom-[5px] right-[33px]"
						style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
					/>
				</div>
				<div className="mt-[30px] ml-[3px] w-full relative">
					<label className="text-[18px] font-bold">{DefaultPersonalInfoPageValues.PhoneLabel}</label>
					<p className="text-[#898686] text-[16px]">{phone}</p>
					<MdOutlineEdit
						className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] absolute bottom-[5px] right-[33px]"
						style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
					/>
				</div>
				<div className="mt-[30px] ml-[3px] w-full relative">
					<label className="text-[18px] font-bold">{DefaultPersonalInfoPageValues.EmailLabel}</label>
					<p className="text-[#898686] text-[16px]">{email}</p>
					<MdOutlineEdit
						className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] absolute bottom-[5px] right-[33px]"
						style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
					/>
				</div>
				<button
					className="bg-[#B2A49A] mx-auto mt-[90px] w-[294px] h-[41px] text-center text-white text-[20px] font-sans rounded-xl"
					style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.28)" }}
					onClick={handleLogout}
				>
					{DefaultPersonalInfoPageValues.LogOutButton}
				</button>
			</div>
            {/* Conditionally Render AlertTag if showAlert is true */}
            {showAlert && (
                <AlertTag alertMessage="User logged out successfully." isError={false} />
            )}
		</div>
	);
};

export default UserInfoCard;
