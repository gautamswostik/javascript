import { ElevatedButton } from "@/components/ui/button-view";
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProgressTrackerHomeView() {
  const router = useRouter();
  return (
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
  );
}
