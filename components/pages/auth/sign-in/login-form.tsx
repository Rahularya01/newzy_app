import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Link, router } from "expo-router";
import { GoogleIcon } from "~/assets/icons/google-icon";
import { AppleIcon } from "~/assets/icons/apple-icon";

const formSchema = z.object({
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
});

type FormSchema = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    router.replace("/(tabs)/home");
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

        <Link
          href="/(auth)/forgot-password"
          className="mb-5 text-center font-inter-500 text-base text-primary underline"
        >
          Forgot your password?
        </Link>
        <Button onPress={form.handleSubmit(onSubmit)}>
          <Text>Sign In</Text>
        </Button>
      </View>

      <Text className="my-5 text-center font-inter-700 text-base text-foreground">
        Or
      </Text>

      <Button
        variant="secondary"
        style={{
          boxShadow: "0px 0px 14px 0px #EDEDED",
        }}
        className="mb-5 flex-row items-center justify-center gap-3"
      >
        <GoogleIcon />
        <Text>Sign in with Google</Text>
      </Button>

      <Button
        variant="secondary"
        style={{
          boxShadow: "0px 0px 14px 0px #EDEDED",
        }}
        className="flex-row items-center justify-center gap-3"
      >
        <AppleIcon />
        <Text>Sign in with Apple</Text>
      </Button>

      <Text className="mt-5 pb-10 text-center font-inter-500 text-base text-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="text-primary underline">
          Sign Up Here
        </Link>
      </Text>
    </View>
  );
};

export default LoginForm;
