import { Stack } from "expo-router";
import React from "react";
import { IosBackView } from "@/components/ui/back-view";
import { Platform } from "react-native";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ gestureEnabled: true }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="register"
        options={{
          title: "Register",
          headerLeft: () => (Platform.OS === "ios" ? <IosBackView /> : null),
        }}
      />
    </Stack>
  );
}
