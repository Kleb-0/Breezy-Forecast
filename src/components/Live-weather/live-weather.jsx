import "./live-weather.scss";
import { propTypes } from "./prop-types";

const LiveWeather = ({ currentWeatherData }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ps-3 pe-2">
      <div className="d-grid align-items-center card-container shadow-lg text-white  rounded-1 custom-shadow">
        <div className="card-body text-center">
          <h1 className="card-title text-center">Current Weather</h1>
          <img
            className="d-block mx-auto weather-icon"
            src={`https:${currentWeatherData?.current.condition.icon}`}
            alt="weather icon"
          />
          <h2 className="card-text text-center">
            {Math.round(currentWeatherData?.current.temp_f)}°F
          </h2>
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item text-white">
              Humidity: {currentWeatherData?.current.humidity}%
            </li>
            <li className="list-group-item text-white">
              Wind: {Math.round(currentWeatherData?.current.wind_mph)} MPH
            </li>
            <li className="list-group-item text-white">
              Precipitation: {currentWeatherData?.current.precip_in}mm
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

LiveWeather.propTypes = propTypes;
export default LiveWeather;
