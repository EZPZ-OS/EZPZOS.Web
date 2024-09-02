import React from 'react';
import {BiImage} from "react-icons/bi";

const BusinessProfileForm: React.FC = () => {
    return(
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg">
                <div className="flex items-center p-4">
                    <button className="text-gray-700 hover:text-gray-900">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <h2 className="flex-1 text-center font-bold text-lg text-gray-800">Profile Edit</h2>
                </div>

                <div className="p-4">
                    <div className="flex items-center border border-gray-300 rounded-lg p-4 mb-4">
                        <img src="avatar-placeholder.png" alt="User Avatar" className="w-16 h-16 rounded-full bg-yellow-300 p-2" />
                        <div className="ml-4 flex-1">
                            <h3 className="text-lg font-semibold">@UserName</h3>
                            <p className="text-gray-600">012345678</p>
                            <p className="text-gray-600">1234@gmail.com</p>
                            <p className="text-gray-600">Role</p>
                        </div>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded">
                            Edit
                        </button>
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg p-4">
                        <img src="restaurant-placeholder.png" alt="Restaurant Logo" className="w-16 h-16 bg-pink-300 p-2 rounded" />
                        <div className="ml-4 flex-1">
                            <h3 className="text-lg font-semibold">DemoData Sichuan Cuisine</h3>
                            <p className="text-gray-600">1a Example Rd, Suburb, State, 0000</p>
                            <p className="text-gray-600">Open until 5:00 PM</p>
                            <p className="text-gray-600">012345678</p>
                        </div>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>

);
}

export default BusinessProfileForm;