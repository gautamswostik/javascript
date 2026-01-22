import { ProgressTrackerTextField } from "@/components/ui/text-view";
import { View, StyleSheet , Button} from "react-native";

export default function HomeScreen() {
  return (
    <View style={homeviewStyles.container}>
      <ProgressTrackerTextField style={homeviewStyles.input} label="Email" />
      <ProgressTrackerTextField style={homeviewStyles.input} label="Password" />
      <Button title="Login"></Button>
    </View>
  );
}

const homeviewStyles = StyleSheet.create({
  input: {
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    resizeMode: "contain",
  },
});
