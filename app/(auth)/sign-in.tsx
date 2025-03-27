import React from "react";
import { Image, ScrollView, View } from "react-native";
import LoginForm from "~/components/pages/auth/sign-in/login-form";
import { loginInbackground } from "~/constants/images";
import { Text } from "~/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          source={loginInbackground}
          className="h-[262px] w-full"
          resizeMode="cover"
        />
        <View className="px-5 pt-1">
          <Text className="text-center font-merriweather-sans-800 text-[40px] leading-[50px] text-heading">
            Hello Again!
          </Text>
          <Text className="mt-2.5 text-center font-inter-400 text-[14px] leading-[16px] text-foreground">
            Sign in to your account
          </Text>
          <LoginForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
