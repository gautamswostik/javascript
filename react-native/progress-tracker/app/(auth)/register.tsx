import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ElevatedButton } from "@/components/ui/button-view";
import { ProgressTrackerLoadingView } from "@/components/ui/loading-view";
import { Stack } from "expo-router";
import { ProgressTrackerTextField } from "@/components/ui/text-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  validateEmailAddress,
  validatePassword,
} from "@/constants/validations";

export default function ProgressTrackerRegisterView() {
  const [loading, setLoadingState] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);

    if (text.length === 0) {
      setEmailError("Email is Required");
    } else {
      const error = validateEmailAddress(text);
      setEmailError(error || "");
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);

    if (text.length === 0) {
      setPasswordError("Password is Required");
    } else {
      const error = validatePassword(text);
      setPasswordError(error || "");
    }
  };

  const proceedRegister = () => {
    if (email.length === 0) {
      setEmailError("Email is Required");
      setPasswordError("");
      return;
    }

    const emailErr = validateEmailAddress(email);
    if (emailErr) {
      setEmailError(emailErr);
      setPasswordError("");
      return;
    }
    setEmailError("");

    if (password.length === 0) {
      setPasswordError("Password is Required");
      return;
    }

    const passwordErr = validatePassword(password);
    if (passwordErr) {
      setPasswordError(passwordErr);
      return;
    }
    setPasswordError("");

    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={registerViewStyle.container} edges={[]}>
      <Stack.Screen options={{ title: "Register" }} />
      {loading ? <ProgressTrackerLoadingView /> : null}

      <KeyboardAwareScrollView
        contentContainerStyle={registerViewStyle.scrollview}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <ProgressTrackerTextField
          style={registerViewStyle.input}
          label="Email"
          keyboardType="email-address"
          error={emailError}
          onTextChanged={handleEmailChange}
        />

        <ProgressTrackerTextField
          style={registerViewStyle.input}
          label="Password"
          secureTextEntry={true}
          error={passwordError}
          onTextChanged={handlePasswordChange}
        />

        <ElevatedButton
          title="Register"
          style={registerViewStyle.button}
          onPressed={proceedRegister}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const registerViewStyle = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "fff",
  },
  input: {
    marginTop: 10,
  },
  backgroundImage: {
    resizeMode: "contain",
  },
  button: {
    marginTop: 10,
  },
  regiserTextRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  regiserText: {
    fontSize: 18,
  },
  register: {
    fontWeight: "bold",
    color: "red",
    marginStart: 5,
  },
});
