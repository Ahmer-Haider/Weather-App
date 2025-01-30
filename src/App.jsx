import React, { useState, useEffect } from "react";
import weatherIcon from "/src/assets/weatherIcon.png";
import { WeatherCard, WeatherDetails, ForecastCard } from "./components";

function App() {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState({});
  const [temp, setTemp] = useState({});
  const [urlLocation, setUrlLocation] = useState(null);
  const [condition, setCondition] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [details, setDetails] = useState({});
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [error, setError] = useState("");
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [isDay,setIsDay] = useState(1)
  const [bgUrl,setBgUrl] = useState("") 

  const getWeather = async (query) => {
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=9c64eafb661d4a3ebb6115805242211&q=${query}`
      );
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setLocation(data.location);
      setTemp(data.current);
      setCondition(data.current.condition);
      setIsVisible(true);
      setError("");
      setInput("");
    } catch (error) {
      console.log("Weather API Error:", error);
      setError("Invalid location. Please try again.");
      setIsVisible(false);
    }
  };



  const getDetails = async (query) => {
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=9c64eafb661d4a3ebb6115805242211&q=${query}`
      );
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setDetails(data);
      setWeatherInfo(data.forecast.forecastday);
      setHourlyForecast(data.forecast.forecastday[0].hour || []);
      setIsDay(data.current.is_day)
      setError("");
    } catch (error) {
      console.log("Weather API Error:", error);
      setError("Could not fetch forecast. Please try again.");
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await fetch("http://ip-api.com/json/");
        const loc = await res.json();
        if (loc.city) {
          setUrlLocation(loc.city);
        }
      } catch (error) {
        console.log("Cannot get location:", error);
      }
    };

    getLocation();
  }, []);

  console.log(isDay)

  useEffect(() => {
    if (urlLocation) {
      getWeather(urlLocation);
      getDetails(urlLocation);
    }
  }, [urlLocation]);
  
  useEffect(() => {
    let newBgUrl = "";
    if (condition.text && isDay !== null && isDay===1) {
      const weatherText = condition.text.toLowerCase(); 
      if (weatherText.includes("rain")) {
        newBgUrl = "/rainy.jpg";
      } else if (weatherText.includes("sunny")||weatherText.includes("clear")) {
        newBgUrl = "/sunny.jpg";
      } else if (weatherText.includes("snow")) {
        newBgUrl = "/snowy.jpg";
      } else if (weatherText.includes("cloud")||weatherText.includes("mist")) {
        newBgUrl = "/cloudy.jpg";
      }
      setBgUrl(newBgUrl);
    }
    else if(condition.text && isDay !== null && isDay===0) {
      const weatherText = condition.text.toLowerCase(); 
      if (weatherText.includes("rain")) {
        newBgUrl = "/rainyNight.jpg";
      } else if (weatherText.includes("sunny")||weatherText.includes("clear")) {
        newBgUrl = "/clearNight.jpg";
      } else if (weatherText.includes("snow")) {
        newBgUrl = "/snowyNight.jpg";
      } else if (weatherText.includes("cloud")||weatherText.includes("mist")) {
        newBgUrl = "/cloudyNight.jpg";
      }
      setBgUrl(newBgUrl);
    
    }
  }, [condition.text, isDay]); 

  console.log(bgUrl)
  
  useEffect(() => {
    if (bgUrl!=="") {
      document.body.style.backgroundImage = `url(${bgUrl})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
    }
  }, [bgUrl]);
  

  return (
    <div className="w-full">
      <div className="flex flex-row md:flex-row  text-white gap-6 mt-8 items-center justify-center">
        <input
          className="outline-none placeholder:text-white border-white focus:outline-none border-2 p-4 w-full md:w-[40%] rounded-xl"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Location"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getDetails(input);
              getWeather(input);
            }
          }}
        />
        <button
          className="hover:cursor-pointer mt-4 md:mt-0"
          onClick={() => {
            getWeather(input);
            getDetails(input);
          }}
        >
          <img
            src={weatherIcon}
            alt="search"
            className="w-14"
          />
        </button>
      </div>

      {error && (
        <p className="text-red-600 mt-4 font-semibold flex items-center justify-center">
          {error}
        </p>
      )}

      {isVisible && (
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="w-full md:w-1/3">
            <WeatherCard
              city={location.name}
              state={location.region}
              time={location.localtime}
              temperature={temp.temp_c}
              humidity={temp.humidity}
              weather={condition.text}
              weatherIcon={condition.icon}
              windSpeed={temp.wind_kph}
            />
          </div>
          <div className="flex flex-col mt-8 w-full md:w-3/2 lg:w-3/2 sm:w-3/2 overflow-hidden">
          <h2 className="text-2xl font-semibold underline underline-offset-8 decoration-2 text-start mb-6 text-white">
              Today at
            </h2>
          <div className="overflow-x-auto hide-scrollbar mt-8 w-full lg:w-3/2 sm:w-3/2 md:w-3/2">
            <div className="flex gap-4">

              {hourlyForecast.map((hour, index) => (
                <div key={index} className="flex-shrink-0">
                  <ForecastCard
                    date={hour.time}
                    temp={hour.temp_c}
                    rain={hour.chance_of_rain}
                    weather={hour.condition.icon}
                    wind={hour.wind_kph}
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
          
        </div>
      )}

      {isVisible && hourlyForecast.length > 0 && weatherInfo.length > 0 && (
        <div className="w-full mt-8">
          <WeatherDetails
            maxTemp={weatherInfo?.[0]?.day?.maxtemp_c}
            minTemp={weatherInfo?.[0]?.day?.mintemp_c}
            maxWind={weatherInfo?.[0]?.day?.maxwind_kph}
            windDegree={details.current?.wind_degree}
            windDir={details.current?.wind_dir}
            clouds={details.current?.cloud}
            vision={details.current?.vis_km}
            uv={details.current?.uv}
            feelsLike={details.current?.feelslike_c}
            sunrise={weatherInfo?.[0]?.astro?.sunrise}
            sunset={weatherInfo?.[0]?.astro?.sunset}
            moonrise={weatherInfo?.[0]?.astro?.moonrise}
            moonset={weatherInfo?.[0]?.astro?.moonset}
            moon={weatherInfo?.[0]?.astro?.moon_phase}
          />
        </div>
      )}
    </div>
  );
}

export default App;