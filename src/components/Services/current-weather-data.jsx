const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "http://api.weatherapi.com/v1";

const CurrentWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&lang=en`
    );
    if (!response.ok) {
      throw new Error(`Erro!:${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error to fetch weather:", error);
    return null;
  }
};

export default CurrentWeatherData;
