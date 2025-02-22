import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";  // ✅ Import Firebase signOut
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faHome, faSignOutAlt, faCog, faCalendarAlt, faTint } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    const navigate = useNavigate();
    const auth = getAuth(); // ✅ Get Firebase auth instance

    const handleLogout = async () => {
        try {
            await signOut(auth);  // ✅ Firebase logout
            navigate("/");  // ✅ Redirect to home page after logout
        } catch (error) {
            console.error("Logout failed: ", error.message);
        }
    };

    const user = {
        name: "Anuska Roy",
        email: "anuskaroy0410@gmail.com",
        avatar: "profile-img.JPG",
        cycleStats: {
            lastPeriod: "Feb 6, 2025",
            averageCycleLength: "28 days",
            nextPrediction: "Mar 6, 2025",
            flowPattern: "Moderate",
        }
    };

    return (        
        <div className="min-h-screen flex justify-center items-center p-6 mb-15">
            <div className="bg-[rgba(255,255,255,0.7)] shadow-lg rounded-xl p-6 w-250 text-center">
                <div className="relative">
                    <button className="absolute w-14 h-14 top-0 left-0 bg-[#FB6F92] text-white p-4 rounded-full shadow-md hover:bg-[#FF4D6D] transition"
                        onClick={() => {navigate("/home-page")}}
                    >
                        <FontAwesomeIcon icon={faHome} />
                    </button>
                    <img src={user.avatar} alt="Profile" className="w-24 h-24 mx-auto rounded-full border-4 border-[#FB6F92]" />
                    <button className="absolute w-14 h-14 top-0 right-0 bg-[#FB6F92] text-white p-4 rounded-full shadow-md hover:bg-[#FF4D6D] transition">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-4">{user.name}</h2>
                <p className="text-gray-500 text-sm">{user.email}</p>

                <div className="mt-6 text-left">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Cycle Statistics</h3>
                    <div className="bg-gray-100 p-3 rounded-lg mb-2 flex items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-[#FB6F92] mr-3" />
                        <p>Last Period: <span className="font-semibold">{user.cycleStats.lastPeriod}</span></p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg mb-2 flex items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-[#FB6F92] mr-3" />
                        <p>Average Cycle: <span className="font-semibold">{user.cycleStats.averageCycleLength}</span></p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg mb-2 flex items-center">
                        <FontAwesomeIcon icon={faTint} className="text-[#FB6F92] mr-3" />
                        <p>Flow: <span className="font-semibold">{user.cycleStats.flowPattern}</span></p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-[#FB6F92] mr-3" />
                        <p>Next Prediction: <span className="font-semibold">{user.cycleStats.nextPrediction}</span></p>
                    </div>
                </div>

                <div className="mt-6 flex flex-col gap-5 items-center">
                    <button className="w-1/6 h-15 bg-[#FB6F92] text-white py-2 rounded-lg hover:bg-[#FF4D6D] transition">
                        <FontAwesomeIcon icon={faCog} className="mr-2" /> Settings
                    </button>
                    <button 
                        onClick={handleLogout}  // ✅ Logout using Firebase
                        className="w-1/6 h-15 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition"
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
