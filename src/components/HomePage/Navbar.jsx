import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <>
            <div className="bg-[#FFE5EC] p-4 flex justify-between items-center fixed top-0 w-full z-50">
                <button className="text-[#FB6F92]" style={{fontSize: "25px"}}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
                <div className="flex flex-col items-center text-center">
                    <div className="text-lg-black font-bold" style={{fontSize: "30px"}}>14 Feb</div>
                </div>
                <button className="text-[#FB6F92]" style={{fontSize: "25px"}}>
                    <FontAwesomeIcon icon={faBell} />
                </button>
            </div>
            <div className="p-2 bg-[#FFF5F8] shadow-md fixed top-18 w-full z-50">
                <div className="flex flex-col items-center text-center bg-[#FFF5F8] text-lg-black" style={{fontSize: "20px"}}>Low chance of getting pregnant</div>
            </div>
          </>
    );
  };

export default Navbar;