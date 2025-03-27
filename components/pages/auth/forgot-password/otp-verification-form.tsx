import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { OtpInput } from "react-native-otp-entry";
import { router } from "expo-router";
import { useVerifyOtp } from "~/hooks/api/auth/useVerifyOtp";

const formSchema = z.object({
  otp: z
    .string({
      required_error: "OTP is required",
    })
    .min(6, "OTP must be at least 6 characters"),
});

type FormSchema = z.infer<typeof formSchema>;

const OtpVerificationForm: React.FC = () => {
  const { mutateAsync, isPending } = useVerifyOtp();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {};

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

        <Button onPress={form.handleSubmit(onSubmit)}>
          <Text>Verify</Text>
        </Button>
      </View>
    </View>
  );
};

export default OtpVerificationForm;
