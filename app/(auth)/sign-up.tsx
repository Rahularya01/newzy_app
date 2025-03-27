import React from "react";
import { Image, ScrollView, View } from "react-native";
import { loginInbackground } from "~/constants/images";
import { Text } from "~/components/ui/text";
import RegisterForm from "~/components/pages/auth/sign-up/register-form";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView className="relative">
        <Image
          source={loginInbackground}
          className="absolute left-0 top-0 h-[262px] w-full"
          resizeMode="cover"
        />
        <View className="px-5 pt-[210px]">
          <Text className="text-center font-merriweather-sans-800 text-[40px] leading-[50px] text-heading">
            Create an Account!
          </Text>
          <Text className="mt-2.5 text-center font-inter-400 text-[14px] leading-[16px] text-foreground">
            Sign up to your account
          </Text>
          <RegisterForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
