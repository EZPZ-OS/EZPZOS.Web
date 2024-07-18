import React from "react";

const DeleteMenu = () => {
    return (
        <div className="relative top-0 left-0 bg-del-menu-bg-color w-screen h-screen flex justify-center items-center">
            <div className="w-4/5 bg-white rounded-xl overflow-hidden border border-yellow-500">
                <p className="color[#515151] text-base text-center mt-3 ml-2 mr-2">This will delete this item permanently, are you sure you want to delete?</p>
                <div className="mt-3 mb-3 h-[35px] flex items-center justify-center">
                    <span className="w-[120px] h-full leading-[35px] text-center bg-slate-300 text-white text-sm rounded-lg mr-1">NO, CANCEL</span>
                    <span className="w-[120px] h-full leading-[35px] text-center bg-red-600 text-white text-sm rounded-lg ml-1">YES, DELETE</span>
                </div>
            </div>
        </div>
    )
}

export default DeleteMenu