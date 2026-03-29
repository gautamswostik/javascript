import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ElevatedButton } from "@/components/ui/button-view";
import { ProgressTrackerLoadingView } from "@/components/ui/loading-view";
import { Stack } from "expo-router";
import { ProgressTrackerTextField } from "@/components/ui/text-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerSchema = z.object({
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

type RegisterFormData = z.infer<typeof registerSchema>;

export default function ProgressTrackerRegisterView() {
  const [loading, setLoadingState] = useState(false);

  const { control, handleSubmit } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: "", password: "" },
  });

  const proceedRegister = handleSubmit(() => {
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  });

  return (
    <SafeAreaView style={registerViewStyle.container} edges={[]}>
      <Stack.Screen options={{ title: "Register" }} />
      {loading ? <ProgressTrackerLoadingView /> : null}
      <KeyboardAwareScrollView
        contentContainerStyle={registerViewStyle.scrollview}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <ProgressTrackerTextField
              style={registerViewStyle.input}
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
              style={registerViewStyle.input}
              label="Password"
              value={value}
              error={error?.message}
              secureTextEntry={true}
              onTextChanged={onChange}
            />
          )}
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
    backgroundColor: "#fff",
  },
  input: {
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  },
});
