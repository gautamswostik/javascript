import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ElevatedButton } from "@/components/ui/button-view";
import { ProgressTrackerLoadingView } from "@/components/ui/loading-view";
import { Stack } from "expo-router";
import { ProgressTrackerTextField } from "@/components/ui/text-view";

export default function ProgressTrackerRegisterView() {
  const [loading, setLoadingState] = useState(false);

  return (
    <View style={registerViewStyle.container}>
      <Stack.Screen options={{ title: "Register" }} />
      {loading ? <ProgressTrackerLoadingView /> : null}
      <ProgressTrackerTextField
        style={registerViewStyle.input}
        label="Email"
        keyboardType="email-address"
        validation={(text) => {
          if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(text)) {
            return "Email is invalid";
          }
          return "";
        }}
      />
      <ProgressTrackerTextField
        style={registerViewStyle.input}
        label="Password"
        secureTextEntry={true}
      />
      <ElevatedButton
        title="Register"
        style={registerViewStyle.button}
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

const registerViewStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  input: {
    marginTop: 10,
  },
  backgroundImage: {
    resizeMode: "contain",
  },
  button: {
    marginTop: 10,
  },
  regiserTextRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  regiserText: {
    fontSize: 18,
  },
  register: {
    fontWeight: "bold",
    color: "red",
    marginStart: 5,
  },
});
