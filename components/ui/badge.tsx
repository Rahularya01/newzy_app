import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { cn } from "~/lib/utils";

interface BadgeProps {
  title: string;
  isActive?: boolean;
  onPress?: (item: string) => void;
}

const Badge: React.FC<BadgeProps> = ({
  title,
  isActive,
  onPress,
}: BadgeProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress && onPress(title);
      }}
    >
      <View
        className={cn(
          "rounded-full border border-[#ddd] bg-[#f5f5f5] px-4 py-2.5",
          {
            "border-primary bg-primary text-white": isActive,
          },
        )}
      >
        <Text
          className={cn("font-inter-500 text-sm text-[#222]", {
            "text-white": isActive,
          })}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Badge;
