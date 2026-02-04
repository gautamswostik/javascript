import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import ProgressTrackerLoginView from "./(auth)/login";

export default function HomeScreen() {
  return (
    <View style={homeviewStyles.container}>
      <StatusBar barStyle={"dark-content"}></StatusBar>
      <ProgressTrackerLoginView />
    </View>
  );
}

const homeviewStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
  },
});
