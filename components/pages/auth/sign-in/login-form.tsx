import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Link, useRouter } from "expo-router";
import { GoogleIcon } from "~/assets/icons/google-icon";
import { AppleIcon } from "~/assets/icons/apple-icon";
import { useLogin } from "~/hooks/api/auth/useLogin";
import { Alert } from "react-native";
import { useAuthToken } from "~/hooks/api/auth/useAuthToken";

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
  const { mutateAsync, isPending: isLoading } = useLogin();
  const router = useRouter();
  const { data: token } = useAuthToken();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  if (token) {
    router.replace("/(tabs)/home");
    return null;
  }

  const onSubmit = async (data: FormSchema) => {
    await mutateAsync(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: async (data) => {
          router.replace("/(tabs)/home");
        },
        onError: (error) => {
          console.error("Login failed", error.toJSON());
          Alert.alert(
            "Login Failed",
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
        <Button disabled={isLoading} onPress={form.handleSubmit(onSubmit)}>
          <Text>{isLoading ? "Signing In..." : "Sign In"}</Text>
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
