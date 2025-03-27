import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "~/components/back-button";
import ResetPasswordForm from "~/components/pages/auth/forgot-password/reset-password-form";
import { Text } from "~/components/ui/text";

const ResetPasswordPage: React.FC = () => {
  return (
    <SafeAreaView className="bg-white px-5">
      <View className="pt-5">
        <BackButton />
      </View>
      <View className="pt-[30px]">
        <Text className="font-merriweather-sans-800 text-[32px] leading-10 text-primary">
          Reset Password
        </Text>
        <Text className="mt-1">Please reset your password to sign in.</Text>
      </View>
      <ResetPasswordForm />
    </SafeAreaView>
  );
};

export default ResetPasswordPage;
