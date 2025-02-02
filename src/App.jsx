import LiveWeather from "./components/Live-weather/live-weather.jsx";
import getWeather from "./components/Services/get-weather.jsx";
import { useEffect, useState } from "react";
import "./app.scss";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather("Biguaçu");
      setWeatherData(data);
    };
    fetchWeather();
  }, []);

  return (
    <>
      <LiveWeather weatherData={weatherData} />
    </>
  );
}

export default App;
