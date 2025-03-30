import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { router } from "expo-router";
import { useResetPassword } from "~/hooks/api/auth/useResetPassword";
import { useLocalSearchParams } from "expo-router";

const formSchema = z
  .object({
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string({
        required_error: "Password is required",
      })
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormSchema = z.infer<typeof formSchema>;

const ResetPasswordForm: React.FC = () => {
  const { mutateAsync, isPending: isLoading } = useResetPassword();
  const { email } = useLocalSearchParams();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: FormSchema) => {
    await mutateAsync(
      {
        password: data.password,
        password_confirmation: data.confirmPassword,
        email,
      },
      {
        onSuccess: async (data) => {
          router.push("/(auth)/sign-in");
        },
        onError: (error) => {
          console.error("Request failed", error);
          Alert.alert(
            "Error!",
            error.response?.data.message ||
              "An error occurred during changing password",
          );
        },
      },
    );
  };

  return (
    <View className="mt-[30px] w-full">
      <View>
        <Controller
          control={form.control}
          name="password"
          render={({ field }) => (
            <Input
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Enter new password"
              inputMode="text"
              secureTextEntry
              containerClassName="mb-5"
              error={form.formState.errors.password?.message}
            />
          )}
        />

        <Controller
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <Input
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Re-enter password"
              inputMode="text"
              secureTextEntry
              containerClassName="mb-5"
              error={form.formState.errors.confirmPassword?.message}
            />
          )}
        />

        <Button disabled={isLoading} onPress={form.handleSubmit(onSubmit)}>
          <Text>Save</Text>
        </Button>
      </View>
    </View>
  );
};

export default ResetPasswordForm;
