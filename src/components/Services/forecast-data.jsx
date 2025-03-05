const API_KEY = "6ca020962cd9479281521044250202";
const BASE_URL = "http://api.weatherapi.com/v1";

const getForecastData = async (city, numDias = 3) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${numDias}&lang=en`
    );
    if (!response.ok) {
      throw new Error(`Erro!:${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar clima:", error);
    return null;
  }
};

export default getForecastData;
