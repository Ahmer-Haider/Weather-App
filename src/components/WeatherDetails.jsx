import React from "react";

function WeatherDetails({
  maxTemp,
  minTemp,
  maxWind,
  windDegree,
  windDir,
  clouds,
  vision,
  uv,
  feelsLike,
  sunrise,
  sunset,
  moonrise,
  moonset,
  moon,
}) {
  return (
    <div className="p-6 w-full flex h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 rounded-xl border-2 border-gray-300 bg-transparent backdrop-blur-md w-[90%] sm:w-[80%] lg:w-[80%]">
        <h2 className="text-2xl font-semibold underline underline-offset-8 decoration-2 col-span-4 text-start mb-6 text-white">
          Today's Highlights
        </h2>

        <div className="space-y-4 col-span-4 sm:col-span-2 lg:col-span-1">
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Max Temp</p>
            <p className="text-xl text-gray-200">{maxTemp}°C</p>
          </div>
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Min Temp</p>
            <p className="text-xl text-gray-200">{minTemp}°C</p>
          </div>
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Feels Like</p>
            <p className="text-xl text-gray-200">{feelsLike}°C</p>
          </div>
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Max Wind Speed</p>
            <p className="text-xl text-gray-200">{maxWind} km/h</p>
          </div>
        </div>

        <div className="space-y-4 col-span-4 sm:col-span-2 lg:col-span-1">
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Wind Direction</p>
            <p className="text-xl text-gray-200">{windDegree}° {windDir}</p>
          </div>
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Cloud Coverage</p>
            <p className="text-xl text-gray-200">{clouds}%</p>
          </div>
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Visibility</p>
            <p className="text-xl text-gray-200">{vision} km</p>
          </div>
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">UV Index</p>
            <p className="text-xl text-gray-200">{uv}</p>
          </div>
        </div>

        <div className="space-y-4 col-span-4 sm:col-span-2 lg:col-span-1">
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Sunrise</p>
            <p className="text-xl text-gray-200">{sunrise}</p>
          </div>
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Sunset</p>
            <p className="text-xl text-gray-200">{sunset}</p>
          </div>
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Moonrise</p>
            <p className="text-xl text-gray-200">{moonrise}</p>
          </div>
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Moonset</p>
            <p className="text-xl text-gray-200">{moonset}</p>
          </div>
        </div>

        <div className="space-y-4 col-span-4 sm:col-span-2 lg:col-span-1">
          <div className="p-3 rounded-lg bg-transparent hover:bg-gray-200/20 transition duration-200">
            <p className="text-xl font-bold text-white">Moon Phase</p>
            <p className="text-xl text-gray-200">{moon}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
