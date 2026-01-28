import { ProgressTrackerTextField } from "@/components/ui/text-view";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ElevatedButton } from "@/components/ui/button-view";
import { ProgressTrackerLoadingView } from "@/components/ui/loading-view";

export const ProgressTrackerLoginView = () => {
  const [loading, setLoadingState] = useState(false);

  return (
    <View>
      {loading ? <ProgressTrackerLoadingView /> : null}
      <ProgressTrackerTextField style={loginViewStyle.input} label="Email" />
      <ProgressTrackerTextField style={loginViewStyle.input} label="Password" />
      <ElevatedButton
        title="Login"
        style={loginViewStyle.button}
        onPressed={() => {
          setLoadingState(true);
          setTimeout(() => {
            setLoadingState(false);
            // navigation
          }, 1000);
        }}
      ></ElevatedButton>
    </View>
  );
};

const loginViewStyle = StyleSheet.create({
  input: {
    marginTop: 10,
  },
  backgroundImage: {
    resizeMode: "contain",
  },
  button: {
    marginTop: 10,
  },
});
