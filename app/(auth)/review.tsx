import React, { useEffect } from "react";
import { ScrollView, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { clock, loginInbackground, logo } from "~/constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";

const ReviewAccount: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="h-full flex-1">
      <ScrollView
        className="relative"
        contentContainerClassName="flex-1 h-full justify-between"
      >
        <LinearGradient
          colors={["#00838659", "#006F72E0", "#01595B"]}
          className="absolute inset-0 h-full w-full"
        ></LinearGradient>
        <Image
          source={loginInbackground}
          className="absolute left-0 top-0 h-[262px] w-full"
          resizeMode="cover"
        />
        <View className="px-5 pt-[210px]">
          <Image
            source={logo}
            className="mx-auto w-full max-w-[137px]"
            resizeMode="contain"
          />
        </View>

        <View className="flex-1 items-center justify-center">
          <Text className="text-center font-merriweather-sans-800 text-4xl text-white">
            Review Account!
          </Text>

          <Image
            source={clock}
            className="mb-[30px] mt-[60px] w-full max-w-[52px]"
          />
          <Text className="mb-4 font-merriweather-sans-800 text-2xl text-white">
            Please wait!
          </Text>
          <Text className="max-w-[340px] px-5 text-center font-inter-400 text-[14px] text-white">
            Your account is under review for approval. It will take only 24
            hours.
            {"\n\n"}
            <Text className="font-inter-600 text-white">
              Thanks for your patience!
            </Text>
          </Text>
        </View>

        <View className="w-full px-5 pb-5 pt-6">
          <Button variant="destructive" className="bg-destructive">
            <Text className="text-white">Logout</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewAccount;
