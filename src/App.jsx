import LiveWeather from "./components/Live-weather/live-weather.jsx";
import getCurrentWeather from "./components/Services/get-weather.jsx";
import { useEffect, useState } from "react";
import getForecastData from "./components/Services/forecast-data.jsx";
import "./App.scss";
import WeatherPrevision from "./components/Weather-prevision/weather-prevision.jsx";

function App() {
  const [city, setCity] = useState("new york");

  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchCurrentWeatherData = async () => {
      const data = await getCurrentWeather(city); 
      setCurrentWeatherData(data);
    };
    fetchCurrentWeatherData();
  }, [city]);

  useEffect(() => {
    const fetchForecastData = async () => {
      const data = await getForecastData(city); 
      console.log("Dados da previsão de tempo:", data);
      setForecastData(data);
    };
    fetchForecastData();
  }, [city]); 

  return (
    <div className="d-flex justify-content-center align-items-center app">
      <LiveWeather currentWeatherData={currentWeatherData} setCity={setCity} />
      <WeatherPrevision forecastData={forecastData} setCity={setCity} />
    </div>
  );
}

export default App