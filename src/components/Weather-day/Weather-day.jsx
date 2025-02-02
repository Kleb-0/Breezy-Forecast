import "./Weather-day.scss";

const WeatherDay = () => {
  return (
    <div
      className="card mb-4 forecast-card"
      style={{ maxWidth: "10rem", maxHeight: "10rem" }}
      >
      <img 
      className="card-img-top img-fluid w-50 img-center weather-icon" 
      src="/public/assets/clear-day.png" 
      alt="" />
      <div className="card-body">
        <h5 className="card-title text-center">Tuesday</h5>
        <p className="card-text text-center">16°C - 22°C</p>
      </div>
    </div>
  );
};

export default WeatherDay;
