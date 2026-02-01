import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export const ProgressTrackerTextField = ({
  style,
  label,
  keyboardType,
  secureTextEntry,
  validation,
}: {
  style?: ViewStyle;
  label?: string;
  rule?: string | null;
  keyboardType?: "default" | "email-address" | "numeric";
  secureTextEntry?: boolean;
  errorInfo?: string;
  validation?: (value: string) => string;
}) => {
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState("");

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
          error.length > 0 && textInputStyle.error,
        ]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChangeText={(text) => {
          if (validation) {
            if (!validation) return;
            let errorMessage = validation(text);
            setError(errorMessage);
          }
        }}
      />
      {error.length > 0 && (
        <Text style={textInputStyle.errorInfo}>{error}</Text>
      )}
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
  },
  errorInfo: {
    color: "#d32f2f",
    marginLeft: 10,
    marginTop: 4,
  },
});
