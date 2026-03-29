import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { ElevatedButton } from "@/components/ui/button-view";
import { ProgressTrackerLoadingView } from "@/components/ui/loading-view";
import { useRouter } from "expo-router";
import { Routes } from "@/constants/routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressTrackerTextField } from "@/components/ui/text-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TypewriterText } from "@/components/ui/animated-text";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      "Password must contain at least one special character"
    ),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function ProgressTrackerLoginView() {
  const [loading, setLoadingState] = useState(false);
  const router = useRouter();

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const proceedLogin = handleSubmit(() => {
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
      router.push(Routes.HOME);
    }, 1000);
  });

  return (
    <SafeAreaView style={loginViewStyle.safeArea} edges={[]}>
      {loading ? <ProgressTrackerLoadingView /> : null}

      <KeyboardAwareScrollView
        contentContainerStyle={loginViewStyle.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TypewriterText
          text="WELCOME"
          speed={80}
          enableHaptic={true}
          hapticStyle="heavy"
          delay={1}
          style={loginViewStyle.title}
        />

        <TypewriterText
          text="Login to continue"
          speed={60}
          delay={1500}
          enableHaptic={true}
          hapticStyle="heavy"
          style={loginViewStyle.subtitle}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <ProgressTrackerTextField
              style={loginViewStyle.input}
              label="Email"
              value={value}
              error={error?.message}
              keyboardType="email-address"
              onTextChanged={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <ProgressTrackerTextField
              style={loginViewStyle.input}
              label="Password"
              value={value}
              error={error?.message}
              onTextChanged={onChange}
              secureTextEntry={true}
            />
          )}
        />

        <ElevatedButton
          title="Login"
          style={loginViewStyle.button}
          onPressed={proceedLogin}
        />
        <RegisterButton />
      </KeyboardAwareScrollView>
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
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    marginTop: 10,
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
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    color: "333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
