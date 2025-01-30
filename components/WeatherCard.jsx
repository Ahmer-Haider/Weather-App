import React from "react";

function WeatherCard({
  city,
  temperature,
  humidity,
  weather,
  time,
  state,
  windSpeed,
  weatherIcon,
}) {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col w-[320px] sm:w-[360px] md:w-[400px] border-2 border-gray-200 bg-transparent backdrop-blur-xs rounded-2xl shadow-md">
        <div className="flex items-center justify-around mb-4 p-2">
          <h2 className="font-semibold text-xl text-white">{city}, {state}</h2>
          <p className="text-md font-semibold text-white">{time}</p>
        </div>

        <div className="flex justify-between flex-col items-center mb-6 p-4">
          {weatherIcon ? (
            <img src={weatherIcon} alt="Weather Icon" className="w-16 h-16" />
          ) : (
            <div className="w-16 h-16 bg-gray-300 rounded-full flex justify-center items-center">
              <p className="text-white font-semibold">?</p>
            </div>
          )}
          <p className="font-semibold text-2xl text-white mt-2">{temperature}°C</p>
          <p className="font-medium text-lg text-white">{weather}</p>
        </div>

        <div className="flex justify-around items-center text-white p-4">
          <div className="text-center">
            <p className="font-semibold text-lg">Humidity</p>
            <p className="font-medium text-lg">{humidity}%</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">Wind Speed</p>
            <p className="font-medium text-lg">{windSpeed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
