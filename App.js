import { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import { Loader, Weather } from "./components";
import ApiService from "./service/api.service";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permisson to access locationd was denied");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      const { data } = await ApiService.getWeather(
        latitude,
        longitude,
        setIsLoading
      );
      setLocation(data);
    } catch (error) {
      Alert.alert("I can't find your current location, so bad :(");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? <Loader /> : <Weather />;
}
