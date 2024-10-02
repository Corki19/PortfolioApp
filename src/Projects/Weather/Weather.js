import { useState } from "react";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GiHeatHaze } from "react-icons/gi";

export default function Weather() {
  const api = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [isVisible, setIsVisible] = useState(false); // Durum değişkeni

  const submitHandle = async (e) => {
    e.preventDefault();
    setIsVisible(true); // Metin kutusuna basıldığında görünürlüğü değiştir
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  };

  const dayOrNight = () => {
    const date = new Date();
    const current = date.getTime() / 1000;

    return weather.sys.sunrise < current && weather.sys.sunset > current;
  };

  return (
    <div className="flex items-center justify-center bg-[#06283D] h-screen">
      <div
        className={`relative bg-white p-6 rounded-lg font-roboto overflow-hidden flex flex-col items-center justify-center transition-all duration-500 ${isVisible ? "min-h-[400px]" : "min-h-[50px]"}`}
      >
        <form onSubmit={submitHandle} className="w-full mb-4">
          <input
            type="text"
            placeholder="Şehir girin."
            className="min-h-min flex items-center justify-between text-[#06283D] w-[80%] text-[24px] font-medium uppercase"
            onChange={(e) => setCity(e.target.value)}
          />
        </form>
        {isVisible && weather && ( // Sadece görünürse weather bilgilerini göster
          <div className="weather_info">
            <div className="flex flex-row justify-between items-center opacity-100 country_info">
              <img
                src={`https://flagsapi.com/${weather.sys.country}/flat/64.png`}
                alt="bayrak"
              />
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              className="w-[15vh] h-[15vh] opacity-100 flex items-center justify-between ml-[65px]"
              alt="hava simgesi"
            />
            <div className="mb-[10px] daynight font-bold">
              {dayOrNight() ? "Gündüz" : "Gece"}
            </div>
            <div className="font-bold flex flex-row justify-between items-center details">
              <div className="degree mr-[20px]">
                {"Heat "}
                <GiHeatHaze />
                <div className="font-normal">{Math.round(weather.main.temp - 273.15)}°C</div>
              </div>
              <div className="humidity mr-[20px]">
                {"Humidity "}
                <WiHumidity />
                <div className="font-normal">{weather.main.humidity}%</div>
              </div>
              <div className="wind">
                {"Wind Speed "}
                <FaWind />
                <div className="font-normal">{weather.wind.speed} Km/h</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
