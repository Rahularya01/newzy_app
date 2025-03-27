import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Pressable, View } from "react-native";

const BackButton: React.FC = () => {
  return (
    <Pressable onPress={() => router.back()}>
      <View
        style={{
          boxShadow: "0px 4px 6px 0px #00000012",
        }}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
      >
        <ChevronLeft size={24} color="#006163" />
      </View>
    </Pressable>
  );
};

export default BackButton;
