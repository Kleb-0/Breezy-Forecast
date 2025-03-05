import { useState } from "react";
import PropTypes from "prop-types";
import "./weather-prevision.scss";
import WeatherDay from "../Weather-day/Weather-day";

const WeatherPrevision = ({ forecastData, setCity }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const newCity = e.target.value;
    setInputValue(newCity);
    setCity(newCity); 
  };

  return (
    <div className="d-flex flex-wrap card align-items-center forecast">
      <h2 className="card-title text-white text-center p-1">Forecast</h2>
      <input
        className="form-control"
        type="search"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="New York"
      />
      <div className="weather-day">
        <WeatherDay day={0} forecastData={forecastData} />
        <WeatherDay day={1} forecastData={forecastData} />
        <WeatherDay day={2} forecastData={forecastData} />
      </div>
    </div>
  );
};

WeatherPrevision.propTypes = {
  forecastData: PropTypes.object,
  setCity: PropTypes.func.isRequired,
};

export default WeatherPrevision;
