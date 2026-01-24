import { Pressable, Text, StyleSheet } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export const ElevatedButton = ({
  title,
  onPressed,
  style,
}: {
  title?: string;
  onPressed?: () => void;
  style?: ViewStyle;
}) => {
  return (
    <Pressable style={[elevatedButtonStyle.button, style]} onPress={onPressed}>
      <Text style={elevatedButtonStyle.title}>{title}</Text>
    </Pressable>
  );
};

const elevatedButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: "red",
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    elevation: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
