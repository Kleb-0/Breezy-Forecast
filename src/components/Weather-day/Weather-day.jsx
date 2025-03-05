import "./Weather-day.scss";
import PropTypes from "prop-types";

const WeatherDay = ({ day, forecastData }) => {
  const dayIcon =
    forecastData?.forecast?.forecastday[day]?.day?.condition?.icon;
  const minTemp = Math.round(
    forecastData?.forecast?.forecastday[day]?.day?.mintemp_f
  );
  const maxTemp = Math.round(
    forecastData?.forecast?.forecastday[day]?.day?.maxtemp_f
  );

  const forecastDate = forecastData?.forecast?.forecastday[day]?.date;
  const date = new Date(forecastDate);
  const weekDay = date.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div
      className="card m-2 forecast-card align-items-center justify-content-center"
      style={{ maxWidth: "10rem", maxHeight: "13rem" }}
    >
      <img
        className="card-img-top img-fluid w-50 img-center"
        src={`https:${dayIcon}`}
        alt="weather icon"
      />
      <div className="card-body">
        <h5 className="card-title text-center">{weekDay}</h5>
        <p className="card-text text-center">
        ↓ {minTemp}°F ↑ {maxTemp}°F
        </p>
      </div>
    </div>
  );
};

WeatherDay.propTypes = {
  day: PropTypes.number.isRequired,
  forecastData: PropTypes.shape({
    forecast: PropTypes.shape({
      forecastday: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string.isRequired,
          day: PropTypes.shape({
            mintemp_f: PropTypes.number.isRequired,
            maxtemp_f: PropTypes.number.isRequired,
            condition: PropTypes.shape({
              icon: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherDay;
