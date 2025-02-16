import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Eco = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex flex-col items-center bg-white">
        <div className="absolute inset-0 bg-[url('/eco.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative text-xl font-bold text-black">
            Eco-Friendly Products
        </div>
    </div>


  );
};

export default Eco;
