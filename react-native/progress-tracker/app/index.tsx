import React from "react";
import { View, StyleSheet } from "react-native";
import ProgressTrackerLoginView from "./(auth)/login";

export default function HomeScreen() {
  return (
    <View style={homeviewStyles.container}>
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
});
