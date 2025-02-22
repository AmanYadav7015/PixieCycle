import React, { useState } from "react";

const SelfCare = () => {
  const [symptom, setSymptom] = useState("");
  const [mood, setMood] = useState("");
  const [waterIntake, setWaterIntake] = useState(0);
  const [glasses, setGlasses] = useState([0, 1, 2, 3, 4]);

  const addGlass = () => {
    setGlasses([...glasses, glasses.length]);
  };

  return (
    <div className="h-300vh flex flex-col items-center justify-center p-6 pb-20">
      <h2 className="text-5xl font-bold text-[#6a4c93] mb-10">Welcome to Self Care! &lt;3</h2>

      <div className="p-6 shadow-lg h-100 w-250 border-10 border-[#ff8fab] mt-5 mb-6 flex flex-col items-center">
        <h2 className="font-bold text-4xl text-[#ff8fab] mb-4">My Diary</h2>
        <textarea
          className="w-full h-50 p-3 mb-5 mt-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8fab] resize-none"
          placeholder="How was your day? ✏️"
        />
        <button
          className="bg-[#ff8fab] text-white font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-[#ffc2d1] transition"
        >
          Save Entry
        </button>
      </div>
      
      <div className="flex gap-50 mt-10">
        <div className="p-6 shadow-lg w-100 border-10 border-[#9f86c0] mb-6">
          <h3 className="text-xl text-[#5e548e] font-bold mb-2">Symptom Tracker</h3>
          <input 
            type="text" 
            value={symptom} 
            onChange={(e) => setSymptom(e.target.value)} 
            placeholder="Enter symptoms..." 
            className="bg-[rgba(159,134,192,0.4)] border p-2 w-full"
          />
        </div>
        
        <div className="p-6 shadow-lg w-100 border-10 border-[#ffd166] mb-6">
          <h3 className="text-xl font-bold mb-2">Mood Tracker</h3>
          <select 
            value={mood} 
            onChange={(e) => setMood(e.target.value)} 
            className="bg-[rgba(255,209,102,0.4)] border p-2 w-full"
          >
            <option value="">Select Mood</option>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Anxious">Anxious</option>
            <option value="Excited">Excited</option>
            <option value="Neutral">Neutral</option>
          </select>
        </div>
      </div>
      
      <div className="p-6 shadow-lg w-250 border-10 border-[#8ecae6] flex flex-col items-center text-center mt-10">
        <h3 className="text-xl font-bold mb-2 text-[#0077b6]">Water Tracker</h3>
        <div className="flex gap-7 flex-wrap justify-center mt-10 mb-10">
          {glasses.map((_, index) => (
            <div>
            <div
              key={index}
              className="relative w-10 h-16 cursor-pointer flex items-end justify-center"
              onClick={() => setWaterIntake(index + 1)}
            >
              <div className="absolute bottom-0 w-10 h-16 bg-transparent border-l-4 border-r-4 border-b-8 border-[#a2d2ff] clip-trapezium"></div>
              <div className={`absolute bottom-0 w-10 transition-all ${index < waterIntake ? 'h-full bg-[#a2d2ff]' : 'h-0'}`}></div>
              <p className="mb-6">+</p>
            </div>
            <p className="text-xs text-[#0077b6] mt-2">500ml</p>
            </div>
          ))}
        </div>
        <button 
          onClick={addGlass} 
          className="bg-[#8ecae6] text-white font-bold px-4 py-2 rounded-lg w-1/5 hover:bg-[#bde0fe] transition flex items-center justify-center"
        >
          Add Glass
        </button>
      </div>
      
      {/* <div className="p-6 shadow-lg w-full border-10 border-[#ff8fab] mt-20 mb-6 flex flex-col items-center">
        <h2 className="font-bold text-5xl text-[#a53860] mt-2 mb-10">Tips:</h2>
        <ul className="pl-5 space-y-5 text-lg text-black text-center">
          <li>Stay hydrated and drink plenty of water.</li>
          <li>Get enough sleep and rest your body.</li>
          <li>Eat a balanced and nutritious diet.</li>
          <li>Exercise or do yoga to relieve stress.</li>
          <li>Take time for yourself and relax.</li>
          <li>Practice mindfulness and meditation.</li>
        </ul>
      </div> */}
    </div>
  );
};

export default SelfCare;
