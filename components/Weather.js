import React, { useState } from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Amazing weather",
    description: "Go for a walk, stop staying at home!",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Sit at home",
    description: "Do you see what's on the street?",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Take an umbrella",
    description: "Perhaps the rain will increase soon",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1CB5E0"],
    title: "It's raining outside",
    description: "So there will be a rainbow soon!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "There's a snow outside!",
    description: "Dress warmly, make snowmen",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#B79891", "#94716B"],
    title: "Dusty",
    description: "Better close the windows",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "On the street smog :(",
    description: "I do not advise going out unnecessarily",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
    title: "There's a snow outside!",
    description: "Dress warmly, make snowmen",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "You can't see a damn thing in the fog",
    description: "Do you see what's on the street?",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "The clouds",
    description: "Go for a walk, stop staying at home!",
  },
};

export default function Weather({ temp, name, condition, setWeather }) {
  const [query, setQuery] = useState("");

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.mainContainer}
    >
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <View style={styles.flex}>
          <Text style={styles.headerFont}>{Math.round(temp)}° </Text>
          <Text style={styles.headerFont}>| {name}</Text>
        </View>
      </View>
      <View style={{ ...styles.container, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.description}>
          {weatherOptions[condition].description}
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="City"
            style={styles.input}
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <Button
            title="Search"
            style={styles.btn}
            onPress={() => setWeather(query)}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
  },
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerFont: {
    fontSize: 40,
    color: "#fff",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    marginBottom: 10,
    color: "#fff",
    fontSize: 40,
    fontWeight: 300,
    alignSelf: "flex-start",
  },
  description: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 24,
    alignSelf: "flex-start",
  },
  searchContainer: {
    width: "100%",
    marginTop: 10,
    padding: 10,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e8e8e8",
    borderRadius: 5,
  },
  input: {
    height: "100%",
    width: "70%",
  },
  btn: {
    width: "30%",
  },
});
