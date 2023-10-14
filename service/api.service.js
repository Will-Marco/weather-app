import axios from "axios";

const ApiService = {
  async getWeather(lat, lon, setIsLoading) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=19d15598dd8b46ecbe257581a90cf689&units=metric`
    );
    setIsLoading(false);
    return response;
  },
};

export default ApiService;
