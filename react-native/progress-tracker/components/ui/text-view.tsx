import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export const ProgressTrackerTextField = ({
  style,
  label,
  keyboardType,
  secureTextEntry,
  onTextChanged,
  error,
}: {
  style?: ViewStyle;
  label?: string;
  keyboardType?: "default" | "email-address" | "numeric";
  secureTextEntry?: boolean;
  error?: string;
  onTextChanged?: ((text: string) => void) | undefined;
}) => {
  const [focused, setFocused] = useState(false);
  const hasError = error && error.length > 0;
  return (
    <View style={style}>
      {label != null && label.length > 0 ? (
        <Text style={textInputStyle.label}>{label}</Text>
      ) : null}
      <TextInput
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[
          textInputStyle.input,
          focused && textInputStyle.focused,
          hasError && textInputStyle.error,
        ]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChangeText={onTextChanged}
      />
      {hasError && <Text style={textInputStyle.errorInfo}>{error}</Text>}
    </View>
  );
};

const textInputStyle = StyleSheet.create({
  label: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    padding: 16,
    fontSize: 16,
  },
  focused: {
    borderColor: "blue",
    borderWidth: 2,
    padding: 15,
  },
  error: {
    borderColor: "#d32f2f",
    borderWidth: 2,
    padding: 15,
  },
  errorInfo: {
    color: "#d32f2f",
    marginLeft: 10,
    marginTop: 4,
  },
});
