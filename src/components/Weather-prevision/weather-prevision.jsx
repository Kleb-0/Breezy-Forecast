import "./weather-prevision.scss";
import WeatherDay from "../Weather-day/Weather-day";
import PropTypes from "prop-types";

const WeatherPrevision = ({ forecastData }) => {
  return (
    <div className="d-flex justify-content-center align-items-center card">
      <h2 className="card-title">Weekly Forecast</h2>
      <input className="form-control" type="search" name="search-city" placeholder="Search city" />
      <WeatherDay day={0} forecastData={forecastData} />
      <WeatherDay day={1} forecastData={forecastData} />
      <WeatherDay day={2} forecastData={forecastData} />
      <WeatherDay day={3} forecastData={forecastData} />
      <WeatherDay day={4} forecastData={forecastData} />
    </div>
  );
};
WeatherPrevision.propTypes = {
  forecastData: PropTypes.object.isRequired,
};

export default WeatherPrevision;
