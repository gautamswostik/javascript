import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ElevatedButton } from "@/components/ui/button-view";
import { ProgressTrackerLoadingView } from "@/components/ui/loading-view";
import { Stack } from "expo-router";
import { ProgressTrackerTextField } from "@/components/ui/text-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProgressTrackerRegisterView() {
  const [loading, setLoadingState] = useState(false);

  return (
    <SafeAreaView style={registerViewStyle.container} edges={[]}>
      <Stack.Screen options={{ title: "Register" }} />
      {loading ? <ProgressTrackerLoadingView /> : null}
      <KeyboardAwareScrollView
        contentContainerStyle={registerViewStyle.scrollview}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <ProgressTrackerTextField
          style={registerViewStyle.input}
          label="Email"
          keyboardType="email-address"
          // validation={(text) => {
          //   if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(text)) {
          //     return "Email is invalid";
          //   }
          //   return "";
          // }}
        />
        <ProgressTrackerTextField
          style={registerViewStyle.input}
          label="Password"
          secureTextEntry={true}
          // validation={(text) => {

          // }}
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const registerViewStyle = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "fff",
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
