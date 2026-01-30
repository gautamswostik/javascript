import { ProgressTrackerTextField } from "@/components/ui/text-view";
import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { ElevatedButton } from "@/components/ui/button-view";
import { ProgressTrackerLoadingView } from "@/components/ui/loading-view";
import { useRouter } from "expo-router";
import { Routes } from "@/constants/routes";
import { SafeAreaView } from "react-native-safe-area-context";

export const ProgressTrackerLoginView = () => {
  const [loading, setLoadingState] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView>
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
            router.push(Routes.HOME);
            // navigation
          }, 1000);
        }}
      ></ElevatedButton>
      <RegisterButton />
    </SafeAreaView>
  );
};

const RegisterButton = () => {
  return (
    <Pressable style={loginViewStyle.regiserTextRow}>
      <Text style={loginViewStyle.regiserText}>Do not have account ?</Text>
      <Text style={[loginViewStyle.regiserText, loginViewStyle.register]}>
        Register
      </Text>
    </Pressable>
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
