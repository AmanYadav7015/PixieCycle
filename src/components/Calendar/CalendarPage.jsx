import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="bg-[#efcfe3] shadow-lg mt-15 mb-10 w-[450px] h-[450px] flex justify-center items-center">
        <Calendar
          onChange={setDate}
          value={date}
          className="custom-calendar scale-100 text-xl"
        />
      </div>

      <div>
        <button 
          className="m-4 px-6 py-2 text-white font-semibold rounded-full"
          style={{ backgroundColor: "#FFAFCC", fontSize: "18px" }}
          onClick={() => navigate("/add-period")}
        >
          Edit Period
        </button>
        <button 
          className="m-4 px-6 py-2 text-white font-semibold rounded-full"
          style={{ backgroundColor: "#FFAFCC", fontSize: "18px" }}
          // onClick={() => navigate("/home-page")}
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default CalendarPage;
