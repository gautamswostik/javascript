import { Stack } from "expo-router";
import React from "react";
import { Button } from "react-native";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ gestureEnabled: true }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="register"
        options={{
          title: "Register",
          headerBackVisible: true,
          headerBackTitle: "Back",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
