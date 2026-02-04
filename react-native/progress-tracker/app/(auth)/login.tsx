import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { ElevatedButton } from "@/components/ui/button-view";
import { ProgressTrackerLoadingView } from "@/components/ui/loading-view";
import { useRouter } from "expo-router";
import { Routes } from "@/constants/routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressTrackerTextField } from "@/components/ui/text-view";
import {
  validateEmailAddress,
  validatePassword,
} from "@/constants/validations";

export default function ProgressTrackerLoginView() {
  const [loading, setLoadingState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

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

  const proceedLogin = () => {
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
      router.push(Routes.HOME);
    }, 1000);
  };

  return (
    <SafeAreaView>
      {loading ? <ProgressTrackerLoadingView /> : null}
      <ProgressTrackerTextField
        style={loginViewStyle.input}
        label="Email"
        error={emailError}
        keyboardType="email-address"
        onTextChanged={handleEmailChange}
      />
      <ProgressTrackerTextField
        style={loginViewStyle.input}
        label="Password"
        error={passwordError}
        onTextChanged={handlePasswordChange}
        secureTextEntry={true}
      />
      <ElevatedButton
        title="Login"
        style={loginViewStyle.button}
        onPressed={proceedLogin}
      ></ElevatedButton>
      <RegisterButton />
    </SafeAreaView>
  );
}

const RegisterButton = () => {
  const router = useRouter();
  return (
    <Pressable
      style={loginViewStyle.regiserTextRow}
      onPress={() => {
        router.push(Routes.REGISTER);
      }}
    >
      <Text style={loginViewStyle.regiserText}>Do not have account ?</Text>
      <Text style={[loginViewStyle.regiserText, loginViewStyle.register]}>
        Register
      </Text>
    </Pressable>
  );
};

const loginViewStyle = StyleSheet.create({
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
