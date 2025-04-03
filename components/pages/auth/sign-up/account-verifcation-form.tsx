import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { OtpInput } from "react-native-otp-entry";
import { router } from "expo-router";
import { useVerifyAccountOtp } from "~/hooks/api/auth/useVerifyAccountOtp";
import { useLocalSearchParams } from "expo-router";

const formSchema = z.object({
  otp: z
    .string({
      required_error: "OTP is required",
    })
    .min(6, "OTP must be at least 6 characters"),
});

type FormSchema = z.infer<typeof formSchema>;

const AccountVerificationForm: React.FC = () => {
  const { mutateAsync, isPending: isLoading } = useVerifyAccountOtp();
  const { email } = useLocalSearchParams();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormSchema) => {
    await mutateAsync(
      {
        code: values.otp,
        type: "email_verification",
        email,
      },
      {
        onSuccess: async () => {
          router.push("/(auth)/sign-up-questions");
        },
        onError: (error) => {
          console.error("Request failed", error);
          Alert.alert(
            "Error!",
            error.response?.data.message ||
              "An error occurred during verification",
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
              numberOfDigits={6}
              onTextChange={field.onChange}
              placeholder="••••••"
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

export default AccountVerificationForm;
