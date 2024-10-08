import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteCusine } from "../../Services/Private/MenuService";

interface IProps {
	cusineId: string;
	hideToast: Function;
}

const DeleteMenu = (props: IProps) => {
	const { cusineId, hideToast } = props;
	const navigate = useNavigate();

	const handleHideToast = () => {
		hideToast();
	};

	const deleteDishOpt = () => {
		// request backend api -> delete dish
		deleteCusine(cusineId).then(res => {
			if (res.status === 200) {
				navigate("/menu-list");
			}
		});
		// end request success
		handleHideToast();
	};

	return (
		<div className="fixed z-[2000] bg-[#fff] top-0 left-0 bg-del-menu-bg-color w-screen h-screen flex justify-center items-center">
			<div className="w-4/5 bg-white rounded-xl overflow-hidden border border-yellow-500">
				<p className="color[#515151] text-base text-center mt-3 ml-2 mr-2">
					This will delete this item permanently, are you sure you want to delete?
				</p>
				<div className="mt-3 mb-3 h-[35px] flex items-center justify-center">
					<span
						className="w-[120px] h-full leading-[35px] text-center bg-slate-300 text-white text-sm rounded-lg mr-1"
						onClick={handleHideToast}
					>
						NO, CANCEL
					</span>
					<span
						className="w-[120px] h-full leading-[35px] text-center bg-red-600 text-white text-sm rounded-lg ml-1"
						onClick={deleteDishOpt}
					>
						YES, DELETE
					</span>
				</div>
			</div>
		</div>
	);
};

export default DeleteMenu;
