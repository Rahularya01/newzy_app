import React, { useState, useRef, useEffect } from "react";
import { Animated, Image, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { onBoarding1, onBoarding2, onBoarding3 } from "~/constants/images";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const slides = [
  {
    id: "1",
    title: "Welcome to Our App",
    description: "Discover, Navigate , Thrive",
    image: onBoarding1,
  },
  {
    id: "2",
    title: "Stay Connected",
    description: "Discover, Navigate , Thrive",
    image: onBoarding2,
  },
  {
    id: "3",
    title: "Get Started!",
    description: "Discover, Navigate , Thrive",
    image: onBoarding3,
  },
];

export default function OnboardingScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorAnim = useRef(new Animated.Value(0)).current;
  const slideFadeAnim = useRef(new Animated.Value(0)).current;

  // Check if onboarding has already been seen
  useEffect(() => {
    async function checkOnboarding() {
      try {
        const hasSeenOnboarding =
          await AsyncStorage.getItem("hasSeenOnboarding");
        if (hasSeenOnboarding) {
          // Use replace to avoid going back to the onboarding screen
          router.replace("/(auth)/sign-in");
        }
      } catch (error) {
        console.error("Error checking onboarding status", error);
      }
    }
    checkOnboarding();
  }, []);

  useEffect(() => {
    Animated.timing(indicatorAnim, {
      toValue: activeIndex,
      duration: 300,
      useNativeDriver: false,
    }).start();

    slideFadeAnim.setValue(0);
    Animated.timing(slideFadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [activeIndex, indicatorAnim, slideFadeAnim]);

  const renderItem = ({ item }: { item: (typeof slides)[number] }) => (
    <Animated.View
      style={{ opacity: slideFadeAnim }}
      className="relative flex-1 bg-primary"
    >
      <Image source={item.image} className="absolute inset-0 h-full w-full" />
      <View className="absolute bottom-[140px] p-5">
        <Text className="font-merriweather-sans-700 text-xl text-white">
          {item.title}
        </Text>
        <Text className="mt-[15px] font-merriweather-sans-800 text-[55px] leading-[60px] text-white">
          {item.description}
        </Text>
      </View>
    </Animated.View>
  );

  return (
    <SafeAreaView className="flex-1 bg-primary">
      {renderItem({ item: slides[activeIndex] })}

      <View className="absolute bottom-20 left-0 w-full flex-row items-center justify-between pl-5">
        <View className="flex-row gap-[5px]">
          {slides.map((slide, index) => {
            const width = indicatorAnim.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [20, 42, 20],
              extrapolate: "clamp",
            });
            const backgroundColor = activeIndex === index ? "#fff" : "#16A9AC";
            return (
              <Animated.View
                key={slide.id}
                style={{ width, backgroundColor }}
                className="h-[5px] rounded-full"
              />
            );
          })}
        </View>
        <Pressable
          onPress={async () => {
            if (activeIndex === slides.length - 1) {
              try {
                await AsyncStorage.setItem("hasSeenOnboarding", "true");
              } catch (error) {
                console.error("Error setting onboarding status", error);
              }
              router.push("/(auth)/sign-in");
              return;
            }
            setActiveIndex(activeIndex + 1);
          }}
        >
          <View className="relative rounded-l-full bg-white/25 p-[6px] pr-0">
            <View
              className="absolute right-0 top-[7px] h-9 w-9 -translate-y-full rounded-full bg-transparent"
              style={{
                boxShadow: "18px 15px 0px 0px #fff",
              }}
            />
            <View
              className="absolute bottom-[7px] right-0 h-8 w-8 translate-y-full rotate-[90deg] rounded-full bg-transparent"
              style={{
                boxShadow: "-14px -14px 0px 0px #fff",
              }}
            />
            <View className="rounded-l-full bg-white px-[30px] py-2.5">
              <Text className="font-inter-600 text-[16px] leading-[30px] text-[#222]">
                {activeIndex === slides.length - 1 ? "Get Started" : "Next"}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
