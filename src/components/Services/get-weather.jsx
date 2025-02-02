import CurrentWeatherData from "./current-weather-data";

const getWeather = async () => {
  try {
    const data = await CurrentWeatherData("Biguaçu");
    console.log("Dados do clima recebido:", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar clima", error);
  }
};

export default getWeather;
