import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import {
  faHome,
  faCalendarDays,
  faHeartCirclePlus,
  faHandHoldingHeart,
  faChartSimple,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const location = useLocation();
  const activePath = location.pathname;

  const buttons = [
    { id: "/home-page", icon: faHome, route: "/home-page" },
    { id: "/calendar", icon: faCalendarDays, route: "/calendar" },
    { id: "/add-period", icon: faHeartCirclePlus, route: "/add-period" },
    { id: "/self-care", icon: faHandHoldingHeart, route: "/self-care" },
    { id: "/analytics-page", icon: faChartSimple, route: "/analytics-page" },
    { id: "/eco", icon: faLeaf, route: "/eco" },
  ];

  return (
    <div className="bg-[#FFE5EC] p-4 flex justify-between items-center fixed bottom-0 w-full z-50 shadow-[0_-2px_2px_rgba(0,0,0,0.2)] h-[60px]">
      {buttons.map((btn) => (
        <Link key={btn.id} to={btn.route}>
          <button
            className={`relative w-12 h-12 flex items-center justify-center rounded-lg transition duration-200 ${
              activePath === btn.route ? "bg-[#FB6F92]/30" : "bg-transparent"
            }`}
          >
            <FontAwesomeIcon
              icon={btn.icon}
              className="text-[25px]"
              style={{ color: btn.id === "/eco" ? "#97C872" : "#FB6F92" }}
            />
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
