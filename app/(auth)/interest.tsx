import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "~/components/back-button";
import { cn } from "~/lib/utils";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";

const INTERESTS = [
  "Tech",
  "Health",
  "Business",
  "Animals",
  "Writing",
  "Photography",
  "Architecture",
  "Nature",
  "Lifestyle",
  "People",
];

const MAX_SELECTION = 5;

const Interest: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleSelection = (interest: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interest)) {
        return prev.filter((item) => item !== interest);
      }
      if (prev.length < MAX_SELECTION) {
        return [...prev, interest];
      }
      return prev;
    });
  };

  return (
    <SafeAreaView className="h-full flex-1 justify-between bg-[#f4f4f4]/70 px-5 pb-5">
      <View className="pt-5">
        <BackButton />
      </View>
      <View className="flex-1 items-center pt-7">
        <Text className="font-merriweather-sans-800 text-[40px] text-[#222]">
          Interests
        </Text>
        <Text className="mt-2.5 text-center font-inter-400 text-[14px] text-[#6b6b6b]">
          Select up to 5 interests to continue.
        </Text>

        <View className="mt-16 flex-row flex-wrap justify-center gap-4">
          {INTERESTS.map((item) => {
            const isSelected = selectedInterests.includes(item);
            return (
              <TouchableOpacity
                onPress={() => toggleSelection(item)}
                className={cn(
                  "self-start rounded-full border px-7 py-4",
                  isSelected
                    ? "bg-primary text-white"
                    : "border-[#AAD4D6] bg-white text-gray-700",
                )}
              >
                <Text
                  className={cn(
                    "font-inter-500 text-[14px]",
                    isSelected ? "text-white" : "text-[#222]",
                  )}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <Button
        onPress={() => {
          if (selectedInterests.length < 0)
            return alert("Please select at least one interest");
          router.push(
            `/sign-up-questions?interest=${encodeURIComponent(JSON.stringify(selectedInterests))}`,
          );
        }}
      >
        <Text>Continue</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Interest;
