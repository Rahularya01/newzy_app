import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
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
    await mutateAsync({
      email: data.email,
    });
    router.push("/(auth)/otp-verification");
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
