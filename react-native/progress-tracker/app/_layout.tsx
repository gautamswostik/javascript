import { IosBackView } from "@/components/ui/back-view";
import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        gestureEnabled: true,
        headerLeft: () => (Platform.OS === "ios" ? <IosBackView /> : null),
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(home)" options={{ headerShown: true }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}
