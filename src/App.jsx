import LiveWeather from "./components/Live-weather/live-weather.jsx";
import getCurrentWeather from "./components/Services/get-weather.jsx";
import { useEffect, useState } from "react";
import getForecastData from "./components/Services/forecast-data.jsx";
import "./app.scss";
import WeatherPrevision from "./components/Weather-prevision/weather-prevision.jsx";

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  useEffect(() => {
    const fetchCurrentWeatherData = async () => {
      const data = await getCurrentWeather("Biguaçu");
      setCurrentWeatherData(data);
    };
    fetchCurrentWeatherData();
  }, []);

  const [forecastData, setForecastData] = useState(null);
  useEffect(() => {
    const fetchForecastData = async () => {
      const data = await getForecastData("Biguaçu");
      console.log("Dados da previsão de tempo:", data);
      setForecastData(data);
    };
    fetchForecastData();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <LiveWeather currentWeatherData={currentWeatherData} />
      <WeatherPrevision forecastData={forecastData} />
    </div>
  );
}

export default App;
