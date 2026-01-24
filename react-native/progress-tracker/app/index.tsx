import { ProgressTrackerTextField } from "@/components/ui/text-view";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ElevatedButton } from "@/components/ui/button-view";
import { ProgressTrackerLoadingView } from "@/components/ui/loading-view";

export default function HomeScreen() {
  const [loading, setLoadingState] = useState(false);

  return (
    <View style={homeviewStyles.container}>
      {loading ? <ProgressTrackerLoadingView /> : null}
      <ProgressTrackerTextField style={homeviewStyles.input} label="Email" />
      <ProgressTrackerTextField style={homeviewStyles.input} label="Password" />
      <ElevatedButton
        title="Login"
        style={homeviewStyles.button}
        onPressed={() => {
          setLoadingState(true);
          setTimeout(() => {
            setLoadingState(false);
          }, 1000);
        }}
      ></ElevatedButton>
    </View>
  );
}

const homeviewStyles = StyleSheet.create({
  input: {
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  backgroundImage: {
    resizeMode: "contain",
  },
  button: {
    marginTop: 10,
  },
});
