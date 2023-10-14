import { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import { Loader, Weather } from "./components";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { location, setLocation } = useState({
    latitude: null,
    longitude: null,
  });

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
      setLocation({ latitude, longitude });
    } catch (error) {
      Alert.alert("I can't find your current location, so bad :(");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      getLocation();
      console.log(location);
    }, 1000);
  }, []);

  return isLoading ? <Loader /> : <Weather />;
}
