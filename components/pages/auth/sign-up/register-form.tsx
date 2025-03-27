import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Link, router } from "expo-router";

const formSchema = z
  .object({
    firstName: z.string({
      required_error: "First name is required",
    }),
    lastName: z.string({
      required_error: "Last name is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Invalid email"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
      })
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormSchema = z.infer<typeof formSchema>;

const RegisterForm: React.FC = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    router.push("/sign-up-questions");
  };

  return (
    <View className="mt-[30px] w-full">
      <View>
        <Controller
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <Input
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Enter first name"
              inputMode="text"
              containerClassName="mb-5"
              error={form.formState.errors.firstName?.message}
            />
          )}
        />
        <Controller
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <Input
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Enter last name"
              inputMode="text"
              containerClassName="mb-5"
              error={form.formState.errors.lastName?.message}
            />
          )}
        />
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

        <Controller
          control={form.control}
          name="password"
          render={({ field }) => (
            <Input
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Enter password"
              inputMode="text"
              containerClassName="mb-5"
              secureTextEntry
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
              containerClassName="mb-5"
              secureTextEntry
              error={form.formState.errors.confirmPassword?.message}
            />
          )}
        />

        <Button onPress={form.handleSubmit(onSubmit)}>
          <Text>Sign Up</Text>
        </Button>
      </View>

      <Text className="mt-5 pb-10 text-center font-inter-500 text-base text-foreground">
        Already have an account?{" "}
        <Link href="/(auth)/sign-in" className="text-primary underline">
          Sign In here
        </Link>
      </Text>
    </View>
  );
};

export default RegisterForm;
