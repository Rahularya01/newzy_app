import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "~/components/back-button";
import AccountVerificationForm from "~/components/pages/auth/sign-up/account-verifcation-form";
import { Text } from "~/components/ui/text";

const AccountVerificationPage: React.FC = () => {
  return (
    <SafeAreaView className="bg-white px-5">
      <View className="pt-5">
        <BackButton />
      </View>
      <View className="pt-[30px]">
        <Text className="font-merriweather-sans-800 text-[32px] leading-10 text-primary">
          Verification
        </Text>
        <Text className="mt-1">Please verify your account .</Text>
      </View>
      <AccountVerificationForm />
    </SafeAreaView>
  );
};

export default AccountVerificationPage;
