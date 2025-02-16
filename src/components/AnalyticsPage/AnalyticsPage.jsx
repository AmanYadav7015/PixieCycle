import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AnalyticsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center">
      Analytics
    </div>
  );
};

export default AnalyticsPage;
