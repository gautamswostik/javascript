import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export const IosBackView = () => {
  return (
    <Pressable onPress={() => router.back()}>
      <Ionicons name="chevron-back" size={26} color="black" />
    </Pressable>
  );
};
