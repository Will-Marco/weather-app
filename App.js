import { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import * as Location from "expo-location";
import { Loader, Weather } from "./components";
import axios from "axios";
import { Text } from "react-native";
// import ApiService from "./service/api.service";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);

  const getWeather = async (lat, lon) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=19d15598dd8b46ecbe257581a90cf689&units=metric`
    );
    setLocation(data);
    setIsLoading(false);
  };

  const setWeather = async (query) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=19d15598dd8b46ecbe257581a90cf689&units=metric`
    );
    setLocation(data);
    setIsLoading(false);
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("I can't find your current location, so bad ):");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Weather
      setWeather={setWeather}
      temp={location.main.temp}
      name={location.name}
      condition={location.weather[0].main}
    />
  );
}
