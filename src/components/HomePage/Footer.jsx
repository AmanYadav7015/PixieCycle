import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarDays,
  faHeartCirclePlus,
  faHandHoldingHeart,
  faChartSimple,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [activeButton, setActiveButton] = useState("home");

  const buttons = [
    { id: "home", icon: faHome, color: "#FB6F92" },
    { id: "calendar", icon: faCalendarDays, color: "#FB6F92" },
    { id: "heart", icon: faHeartCirclePlus, color: "#FB6F92" },
    { id: "holdingHeart", icon: faHandHoldingHeart, color: "#FB6F92" },
    { id: "chart", icon: faChartSimple, color: "#FB6F92" },
    { id: "leaf", icon: faLeaf, color: "#97C872" },
  ];

  return (
    <div
      className="bg-[#FFE5EC] p-4 flex justify-between items-center fixed bottom-0 w-full z-50 shadow-[0_-2px_2px_rgba(0,0,0,0.2)]"
      style={{ height: "50px" }}
    >
      {buttons.map((btn) => (
        <button
          key={btn.id}
          className="relative flex items-center justify-center p-1"
          onClick={() => setActiveButton(btn.id)}
        >
          <div
            className={`absolute w-10 h-10 rounded-md ${
              activeButton === btn.id ? ("bg-[#FB6F92]/30") : "bg-transparent"
            }`}
          ></div>
          <FontAwesomeIcon
            icon={btn.icon}
            className="text-[25px] relative"
            style={{ color: btn.id === "leaf" ? "#97C872" : "#FB6F92" }}
            />

        </button>
      ))}
    </div>
  );
};

export default Footer;
