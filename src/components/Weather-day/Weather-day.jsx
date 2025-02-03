import "./Weather-day.scss";
import PropTypes from "prop-types";

const WeatherDay = ({ day, forecastData }) => {
  const dayIcon =
    forecastData?.forecast?.forecastday[day]?.day?.condition?.icon;
  const minTemp = Math.round(
    forecastData?.forecast?.forecastday[day]?.day?.mintemp_c
  );
  const maxTemp = Math.round(
    forecastData?.forecast?.forecastday[day]?.day?.maxtemp_c
  );
  return (
    <div
      className="card mb-4 forecast-card"
      style={{ maxWidth: "10rem", maxHeight: "10rem" }}
    >
      <img
        className="card-img-top img-fluid w-50 img-center weather-icon"
        src={`https:${dayIcon}`}
        alt="weather icon"
      />
      <div className="card-body">
        <h5 className="card-title text-center">Tuesday</h5>
        <p className="card-text text-center">
          {minTemp}°C - {maxTemp}°C
        </p>
      </div>
    </div>
  );
};
WeatherDay.propTypes = {
  day: PropTypes.number.isRequired,
  forecastData: PropTypes.shape({
    forecast: PropTypes.shape({
      forecastday: PropTypes.string.isRequired,
    }).isRequired,
    current: PropTypes.shape({
      condition: PropTypes.shape({
        icon: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherDay;
