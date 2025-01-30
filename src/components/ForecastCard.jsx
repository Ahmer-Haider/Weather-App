import React from "react";
import windIcon from "/src/assets/windIcon.png";

function ForecastCard({ date, temp, rain, weather, wind }) {
  return (
    <div className="flex flex-col items-center bg-transparent backdrop-blur-md p-4 border border-gray-200 rounded-lg shadow-md w-40">

      <p className="text-white font-semibold text-lg">{date.split(" ")[1]}</p>

      <div className="my-2">
        {weather && <img src={weather} alt="Weather Icon" className="w-12 h-12" />}
      </div>

      <p className="text-xl font-semibold text-white">{temp}°C</p>

      <p className="text-sm text-white">{rain}% Rain</p>

      <div className="flex items-center mt-2">
        {windIcon && <img src={windIcon} alt="Wind Icon" className="w-6 h-6 mr-1" />}
        <p className="text-sm text-white">{wind} km/h</p>
      </div>
    </div>
  );
}

export default ForecastCard;
