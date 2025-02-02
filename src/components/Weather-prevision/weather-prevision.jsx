import "./weather-prevision.scss";
import WeatherDay from "../Weather-day/Weather-day";

const WeatherPrevision = () => {
  return (
    <div>
      <h2>Weekly Forecast</h2>
      <input type="search" name="search-city" id="" placeholder="Search city" />
      <WeatherDay />
    </div>
  );
};

export default WeatherPrevision;
