import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Define special dates with symbols
  const specialDates = {
    "2025-02-20": { emoji: "🩸", event: "period have Started" },
    "2025-02-21": { emoji: "🩸", event: "periods are Ongoing" },
    "2025-02-22": { emoji: "🩸", event: "periods are Ongoing" },
    "2025-02-23": { emoji: "🌸", event: "are ovulation" },
    "2025-02-24": { emoji: "💧", event: "are in Luteal Phase" },
  };

  const handleDateClick = (date) => {
    const dateStr = date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
    setSelectedDate(date.toDateString()); // Store selected date
    setSelectedEvent(specialDates[dateStr] || null); // Store event if exists
    setShowPopup(true); // Show popup
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        onClickDay={handleDateClick} // Open popup on any date click
        tileContent={({ date, view }) => {
          if (view === "month") {
            const dateStr = date.toISOString().split("T")[0];
            return <span>{specialDates[dateStr]?.emoji || ""}</span>;
          }
        }}
        className="custom-calendar"
      />

      {/* Popup Modal */}
      {showPopup && (
        <div style={styles.popup}>
          <h3>Oye!! Sex Sux Nahi!!</h3>
          <p>Your</p>
          {selectedEvent && (
            <p>
              {selectedEvent.emoji} {selectedEvent.event}
            </p>
          )}
          <button style={styles.closeButton} onClick={() => setShowPopup(false)}>
            Close
          </button>
        </div>
      )}

      {/* Custom CSS for Calendar Styling */}
      <style>{customStyles}</style>
    </div>
  );
}

// Styling
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#ffe4e1", // Light pink background
  },
  title: {
    color: "#d63384",
    fontSize: "28px",
    marginBottom: "15px",
  },
  popup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid #d63384", // Pink border
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#d63384",
    color: "white",
    border: "none",
    padding: "8px 16px",
    marginTop: "10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

// Custom CSS for bigger calendar styling
const customStyles = `
  .custom-calendar {
    width: 500px; /* 🔥 Increased width */
    height: 500px; /* 🔥 Increased height */
    background: white;
    border: 2px solid #d63384;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 20px; /* 🔥 Bigger font */
  }
  .react-calendar__tile {
    color: #d63384;
    font-size: 18px; /* 🔥 Bigger font */
  }
  .react-calendar__tile--active {
    background: #d63384 !important;
    color: white !important;
  }
  .react-calendar__tile:hover {
    background: #ff99cc !important;
  }
`;

// export default MyCalendar;