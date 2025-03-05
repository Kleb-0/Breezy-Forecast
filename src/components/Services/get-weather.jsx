import CurrentWeatherData from "./current-weather-data";
import getForecastData from "./forecast-data";

const getCurrentWeather = async (city) => {
  try {
    const data = await CurrentWeatherData(city);
    console.log("Dados do clima atual recebidos:", data);
    return data;
  } catch (error) {
    console.error("Error to search currently weather.", error);
  }
};

export const getForecast = async () => {
  try {
    const data = await getForecastData("");
    console.log("Dados de previsão recebidos", data);
    return data;
  } catch (error) {
    console.error("Error to search forecast.", error);
  }
};

export default getCurrentWeather;


