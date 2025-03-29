import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { OtpInput } from "react-native-otp-entry";
import { router } from "expo-router";
import { useVerifyOtp } from "~/hooks/api/auth/useVerifyOtp";
import { useLocalSearchParams } from "expo-router";

const formSchema = z.object({
  otp: z
    .string({
      required_error: "OTP is required",
    })
    .min(5, "OTP must be at least 5 characters"),
});

type FormSchema = z.infer<typeof formSchema>;

const OtpVerificationForm: React.FC = () => {
  const { mutateAsync, isPending: isLoading } = useVerifyOtp();
  const { email } = useLocalSearchParams();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchema) => {
    await mutateAsync(
      {
        code: data.otp,
        type: "password_reset",
        email,
      },
      {
        onSuccess: async (data) => {
          router.push("/(auth)/reset-password");
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
          name="otp"
          render={({ field }) => (
            <OtpInput
              numberOfDigits={5}
              onTextChange={field.onChange}
              placeholder="•••••"
              hideStick
              theme={{
                containerStyle: {
                  borderRadius: 5000,
                  backgroundColor: "#EEEEEE",
                  justifyContent: "center",
                  marginBottom: 20,
                },
                pinCodeContainerStyle: {
                  borderWidth: 0,
                  paddingInline: 0,
                },
                pinCodeTextStyle: {
                  color: "#777777",
                  fontSize: 24,
                  fontWeight: "600",
                },
              }}
            />
          )}
        />

        <Button disabled={isLoading} onPress={form.handleSubmit(onSubmit)}>
          <Text>Verify</Text>
        </Button>
      </View>
    </View>
  );
};

export default OtpVerificationForm;
