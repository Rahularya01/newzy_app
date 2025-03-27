import React from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { router } from "expo-router";

const formSchema = z
  .object({
    oldPassword: z.string({
      required_error: "Password is required",
    }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string({
        required_error: "Password is required",
      })
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormSchema = z.infer<typeof formSchema>;

const ChangePasswordForm: React.FC = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    router.replace("/(auth)/sign-in");
  };

  return (
    <ScrollView contentContainerClassName="flex-1 flex-col pb-5 justify-between px-4 pt-4">
      <View>
        <Text className="pb-7 text-center text-base">
          Enter your old and new password to set.
        </Text>
        <Controller
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <Input
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Enter your full name"
              inputMode="text"
              containerClassName="mb-5"
              error={form.formState.errors.oldPassword?.message}
            />
          )}
        />
        <Controller
          control={form.control}
          name="password"
          render={({ field }) => (
            <Input
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Enter subject"
              inputMode="text"
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
              placeholder="Write your message here..."
              inputMode="text"
              containerClassName="mb-5"
              error={form.formState.errors.confirmPassword?.message}
            />
          )}
        />
      </View>
      <Button onPress={form.handleSubmit(onSubmit)}>
        <Text>Save</Text>
      </Button>
    </ScrollView>
  );
};

export default ChangePasswordForm;
