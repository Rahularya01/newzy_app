import React, { useState } from "react";
import { View, TouchableOpacity, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "~/components/back-button";
import { cn } from "~/lib/utils";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";
import { Check, ChevronDown } from "lucide-react-native";

const LANGUAGES = [
  { name: "English", flag: require("~/assets/images/flags/english.png") },
  { name: "Chinese", flag: require("~/assets/images/flags/chinese.png") },
  { name: "Spanish", flag: require("~/assets/images/flags/spanish.png") },
  { name: "Russian", flag: require("~/assets/images/flags/russian.png") },
  { name: "Portuguese", flag: require("~/assets/images/flags/portuguese.png") },
  { name: "French", flag: require("~/assets/images/flags/french.png") },
  { name: "Italian", flag: require("~/assets/images/flags/italian.png") },
  { name: "Swedish", flag: require("~/assets/images/flags/swedish.png") },
];

const Language: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  return (
    <SafeAreaView className="h-full flex-1 justify-between bg-[#f4f4f4]/70 px-5 pb-5">
      <View className="pt-5">
        <BackButton />
      </View>
      <View className="flex-1 items-center pt-7">
        <Text className="text-center font-merriweather-sans-800 text-[40px] text-[#222]">
          Language & Province
        </Text>
        <Text className="mt-2.5 text-center font-inter-400 text-[14px] text-[#6b6b6b]">
          Select your language and province.
        </Text>
        <View className="w-full pt-14">
          {/* Language Selection */}
          <Text className="mb-4 font-inter-700 text-[14px] font-bold text-[#222]">
            Language
          </Text>
          <View className="w-full flex-row flex-wrap justify-between gap-3">
            {LANGUAGES.map(({ name, flag }) => {
              const isSelected = selectedLanguage === name;
              return (
                <TouchableOpacity
                  key={name}
                  onPress={() => setSelectedLanguage(name)}
                  className={cn(
                    "w-[48%] flex-row items-center gap-2 rounded-[15px] border bg-white p-[15px]",
                    isSelected
                      ? "border-primary bg-primary text-white"
                      : "border-[#AAD4D6]",
                  )}
                >
                  <Image
                    source={flag}
                    className="mr-2 h-[30px] w-[30px] rounded-full"
                  />
                  <Text
                    className={cn(
                      "font-inter-600 text-base",
                      isSelected ? "text-white" : "text-[#222]",
                    )}
                  >
                    {name}
                  </Text>
                  {isSelected && <Check size={18} color="white" className="" />}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Province Dropdown */}
          <Text className="mt-7 font-inter-700 text-[14px] font-bold text-[#222]">
            Province
          </Text>
          <Pressable className="mt-4 h-[60px] flex-row items-center justify-between rounded-full border border-[#ccc] bg-white px-5 py-3">
            <Text className="font-inter-400 text-[14px] text-[#777]">
              Select your province
            </Text>
            <ChevronDown size={24} color="black" />
          </Pressable>
        </View>
      </View>
      <Button
        onPress={() => {
          router.push("/review");
        }}
      >
        <Text>Continue</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Language;
