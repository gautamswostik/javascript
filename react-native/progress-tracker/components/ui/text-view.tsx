import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export const ProgressTrackerTextField = ({
  style,
  label,
}: {
  style?: ViewStyle;
  label?: string;
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={style}>
      {label != null && label.length > 0 ? (
        <Text style={textInputStyle.label}>{label}</Text>
      ) : null}
      <TextInput
        style={[textInputStyle.input, focused && textInputStyle.focused]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
};

const textInputStyle = StyleSheet.create({
  label: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "ccc",
    padding: 10,
  },
  focused: {
    borderColor: "blue",
    borderWidth: 2,
  },
});
