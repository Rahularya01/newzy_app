import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { router } from "expo-router";
import { useForgotPassword } from "~/hooks/api/auth/useForgotPassword";

const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email"),
});

type FormSchema = z.infer<typeof formSchema>;

const ForgotPasswordForm: React.FC = () => {
  const { mutateAsync, isPending: isLoading } = useForgotPassword();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchema) => {
    await mutateAsync(
      {
        email: data.email,
        type: "password_reset",
      },
      {
        onSuccess: async (data) => {
          router.push({
            pathname: "/(auth)/otp-verification",
            params: { email: data.email },
          });
        },
        onError: (error) => {
          console.error("Request failed", error);
          Alert.alert(
            "Error!",
            error.response?.data.message || "An error occurred during login",
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
          name="email"
          render={({ field }) => (
            <Input
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Enter email address"
              inputMode="email"
              containerClassName="mb-5"
              error={form.formState.errors.email?.message}
            />
          )}
        />

        <Button disabled={isLoading} onPress={form.handleSubmit(onSubmit)}>
          <Text>Submit</Text>
        </Button>
      </View>
    </View>
  );
};

export default ForgotPasswordForm;
