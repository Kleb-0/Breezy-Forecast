import CurrentWeatherData from "./current-weather-data";
import getForecastData from "./forecast-data";

const getCurrentWeather = async () => {
  try {
    const data = await CurrentWeatherData("Biguaçu");
    console.log("Dados do clima atual recebidos:", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar clima", error);
  }
};

export const getForecast = async () => {
  try {
    const data = await getForecastData("Biguaçu");
    console.log("Dados de previsão recebidos", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar clima", error);
  }
};

export default getCurrentWeather;

