import { useRef } from "react";
import { Pressable, Text, StyleSheet, Animated } from "react-native";
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
  const animation = useRef(new Animated.Value(10)).current;

  const handleButtonPressIn = () => {
    Animated.spring(animation, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPressOut = () => {
    Animated.spring(animation, { toValue: 1, useNativeDriver: true }).start();
  };
  return (
    <Animated.View style={{ transform: [{ scale: animation }] }}>
      <Pressable
        style={[elevatedButtonStyle.button, style]}
        onPress={onPressed}
        onPressIn={handleButtonPressIn}
        onPressOut={handleButtonPressOut}
      >
        <Text style={elevatedButtonStyle.title}>{title}</Text>
      </Pressable>
    </Animated.View>
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
