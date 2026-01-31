import { ElevatedButton } from "@/components/ui/button-view";
import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProgressTrackerHomeView() {
  const router = useRouter();
  return (
    <View>
      <Stack.Screen options={{ title: "Home" }} />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <ElevatedButton
          title="Go Back"
          onPressed={() => {
            router.back();
          }}
        ></ElevatedButton>
      </SafeAreaView>
    </View>
  );
}
