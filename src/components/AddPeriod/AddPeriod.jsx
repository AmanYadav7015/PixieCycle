import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPeriod = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!startDate || !endDate) {
      alert("Please enter both start and end dates.");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      alert("Start date cannot be after end date.");
      return;
    }

    console.log("Period Logged:", { startDate, endDate });
    navigate("/calendar");
    alert("Period logged successfully!");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-bold mb-8 text-[#6a4c93]">Add Your Period Here</h2>
      <form onSubmit={handleSubmit} className="bg-[#ffe5ec] p-6 shadow-lg w-150 h-100 border-20 border-[#cdb4db] flex flex-col justify-center">
        <label className="block mb-2 font-medium">Start Date:</label>
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          className="border-2 p-2 font-bold w-full rounded mb-4" 
          required
        />
        
        <label className="block mb-2 font-medium">End Date:</label>
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          className="border-2 p-2 font-bold w-full rounded mb-4" 
          required
        />
        
        <button 
          type="submit" 
          className="bg-[#ff8fab] text-bold text-white px-4 py-2 mt-8 rounded w-full hover:bg-[#ffc2d1] transition"
        >
          Add Period
        </button>
      </form>
    </div>
  );
};

export default AddPeriod;
