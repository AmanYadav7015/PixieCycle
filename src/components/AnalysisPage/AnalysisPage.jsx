import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const cycleData = [
  { month: "Jan", length: 28, flow: 3 },
  { month: "Feb", length: 30, flow: 4 },
  { month: "Mar", length: 27, flow: 2 },
  { month: "Apr", length: 29, flow: 3 },
  { month: "May", length: 28, flow: 4 },
];

const AnalysisPage = () => {
  return (
    <div className="p-6 bg-[rgba(255,255,255,0.7)] shadow-lg w-full max-w-3xl mx-auto mt-10 rounded-lg">
      <h2 className="text-2xl font-bold text-[#ff477e] text-center mb-6">Cycle Analysis</h2>
      
      <div className="w-full h-64 bg-gray-100 p-4 rounded-lg shadow-md">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={cycleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="length" stroke="#ff8fab" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 p-4 bg-[#ffe5ec] bg-opacity-80 rounded-lg text-center">
        <h3 className="text-xl font-semibold text-[#ff477e]">Summary</h3>
        <p className="text-gray-700 mt-2">Your average cycle length is <span className="font-bold">28 days</span>.</p>
        <p className="text-gray-700">Your flow intensity varies between <span className="font-bold">2 to 4</span>.</p>
      </div>
    </div>
  );
};

export default AnalysisPage;