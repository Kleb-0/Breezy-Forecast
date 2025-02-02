import "./live-weather.scss";
import { propTypes } from "./prop-types";

const LiveWeather = ({ weatherData }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card container shadow-lg bg-primary text-white custom-shadow">
        <div className="card-body">
          <h1 className="card-title text-center">Weather Finder</h1>
          <img
            className="d-block mx-auto weather-icon"
            src={`https:${weatherData?.current.condition.icon}`} 
            alt="weather icon"
          />
          <h2 className="card-text text-center">{Math.round(weatherData?.current.temp_c)}°C</h2>
          <ul className="list-group list-group-flush text-center bg-primary">
            <li className="list-group-item bg-primary text-white">
              Humidity: {weatherData?.current.humidity}%
            </li>
            <li className="list-group-item bg-primary text-white">
              Wind: {weatherData?.current.wind_kph} KPH
            </li>
            <li className="list-group-item bg-primary text-white">
              Precipitation: {weatherData?.current.precip_in}mm
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

LiveWeather.propTypes = propTypes
export default LiveWeather;