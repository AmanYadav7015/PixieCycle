import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const navigate = useNavigate();

  const specialDates = {
    "2025-02-06": { emoji: "🩸", event: "Cycle day 1" },
    "2025-02-07": { emoji: "🩸", event: "Cycle day 2" },
    "2025-02-08": { emoji: "🩸", event: "Cycle day 3" },
    "2025-02-09": { emoji: "🩸", event: "Cycle day 4" },
    "2025-02-15": { emoji: "🌸", event: "Fertile Window - Medium chance of getting pregnant" },
    "2025-02-16": { emoji: "🌸", event: "Fertile Window - Medium chance of getting pregnant" },
    "2025-02-17": { emoji: "🌸", event: "Fertile Window - Medium chance of getting pregnant" },
    "2025-02-18": { emoji: "🌸", event: "Fertile Window - High chance of getting pregnant" },
    "2025-02-19": { emoji: "🌸", event: "Fertile Window - High chance of getting pregnant" },
    "2025-02-20": { emoji: "🌸", event: "Ovulation Day - High chance of getting pregnant" },
    "2025-02-21": { emoji: "🌸", event: "Fertile Window - Medium chance of getting pregnant" }
  };

  const handleDateClick = (date) => {
    const dateStr = date.toISOString().split("T")[0]; //YYYY-MM-DD
    if (specialDates[dateStr]) {
      setSelectedDate(date.toDateString());
      setSelectedEvent(specialDates[dateStr]);
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };
  

  return (
    <div style={styles.container}>
      <Calendar
        onChange={setDate}
        value={date}
        onClickDay={handleDateClick}
        tileContent={({ date, view }) => {
          if (view === "month") {
            const dateStr = date.toISOString().split("T")[0];
            return (
              <div style={{ height: "25px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {specialDates[dateStr]?.emoji || "‎"} {/* Invisible character to maintain height */}
              </div>
            );
          }
        }}              
        className="custom-calendar"
      />

      <div className="mt-5">
        <button 
        className="font-bold bg-[#cdb4db] text-white p-3 m-4"
        style={{
          borderRadius: "50px",
          fontSize: "20px",
          width: "200px"
        }}
        onClick={() => navigate("/add-period")}>
          Edit Period
        </button>
        <button 
        className="font-bold bg-[#cdb4db] text-white p-3 m-4"
        style={{
          borderRadius: "50px",
          fontSize: "20px",
          width: "200px"
        }}
        onClick={() => navigate("/self-care")}>
          Add Note
        </button>
      </div>

      {showPopup && (
        <div style={styles.popup}>
          {selectedEvent && (
            <p>
              {selectedEvent.emoji} {selectedEvent.event} {selectedEvent.emoji}
            </p>
          )}
          <button style={styles.closeButton} onClick={() => setShowPopup(false)}>
            Close
          </button>
        </div>
      )}

      <style>{customStyles}</style>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "115vh",
    padding: "20px"
  },
  popup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    padding: "20px",
    borderRadius: "20px",
    border: "4px solid #ff8fab",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    textAlign: "center",
    height: "180px",
    width: "370px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px"
  },
  closeButton: {
    backgroundColor: "#ff8fab",
    color: "white",
    border: "none",
    padding: "8px 16px",
    marginTop: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: "800"
  },
};

const customStyles = `
  .custom-calendar {
    width: 600px;
    height: 600px;
    background: #ffe5ec;
    border: 40px solid #cdb4db;
    padding: 15px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
    font-size: 15px;
    font-family: "Figtree", sans-serif;
  }
  .react-calendar__tile {
    color: black;
    font-size: 18px;
  }
  .react-calendar__tile--active {
    background: #ff8fab !important;
    color: white !important;
  }
  .react-calendar__tile:hover {
    background: #ffc2d1 !important;
  }
  
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none !important;
  }
`;