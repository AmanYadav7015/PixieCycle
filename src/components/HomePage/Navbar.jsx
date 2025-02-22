import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <>
            <div className="bg-[#FFE5EC] p-4 flex justify-between items-center fixed top-0 h-12 w-full z-50 shadow-md">
                <button className="text-[#FB6F92]" style={{ fontSize: "25px" }}>
                    <FontAwesomeIcon icon={faUser} />
                </button>

                <div className="flex flex-col items-center text-center">
                    <div className="text-lg-black font-bold" style={{ fontSize: "25px" }}>14 Feb</div>
                </div>

                <button 
                    className="text-[#FB6F92] relative" 
                    style={{ fontSize: "20px" }} 
                    onClick={() => setShowNotifications(!showNotifications)}
                >
                    <FontAwesomeIcon icon={faBell} />
                    
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        3
                    </span>
                </button>
            </div>

            <div className="p-2 bg-[#FFF5F8] shadow-md fixed top-12 w-full z-50">
                <div className="flex flex-col items-center text-center bg-[#FFF5F8] text-lg-black" style={{ fontSize: "20px" }}>
                    Low chance of getting pregnant
                </div>
            </div>

            {showNotifications && (
                <div className="fixed top-12 right-4 w-80 bg-white border border-gray-300 shadow-xl rounded-lg z-50">
                    <div className="p-4 border-b font-bold text-lg text-gray-800 flex justify-between items-center bg-gray-100">
                        Notifications
                        <button onClick={() => setShowNotifications(false)} className="text-gray-500 text-xl hover:text-gray-700">
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                    </div>

                    <div className="max-h-80 overflow-y-auto">
                        {[
                            { icon: "🔔", text: "Your next cycle is expected soon!", time: "5m ago" },
                            { icon: "💡", text: "Remember to stay hydrated!", time: "2h ago" },
                            { icon: "🌱", text: "New article on menstrual health available.", time: "1d ago" }
                        ].map((notif, index) => (
                            <div key={index} className="flex items-center p-3 border-b hover:bg-gray-100 cursor-pointer">
                                <span className="text-xl mr-3">{notif.icon}</span>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-800">{notif.text}</p>
                                    <p className="text-xs text-gray-500">{notif.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-3 text-center text-sm text-blue-500 hover:underline cursor-pointer">
                        View all notifications
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
