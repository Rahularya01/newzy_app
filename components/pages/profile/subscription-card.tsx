import React from "react";
import { View } from "react-native";
import { cn } from "~/lib/utils";
import { Text } from "~/components/ui/text";
import { RightIcon } from "~/assets/icons/right-icon";

export interface SubscriptionCardProps {
  isRecommended: boolean;
  price: number;
  name: string;
  tag: string;
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  isRecommended,
  name,
  tag,
  price,
}) => {
  return (
    <View
      className={cn(
        "w-full rounded-[15px] border border-primary bg-white p-7",
        {
          "border-transparent bg-[#AAD4D6]": isRecommended,
        },
      )}
    >
      <View className="flex-row items-center justify-between">
        <Text className="rounded-full bg-primary px-2.5 py-2 font-inter-600 text-xs text-white">
          {tag}
        </Text>

        <Text className="font-merriweather-sans-800 text-2xl text-primary">
          ${price} <Text className="text-base">/month</Text>
        </Text>
      </View>

      <Text className="mb-1.5 mt-[15px] font-merriweather-sans-800 text-2xl text-black">
        {name}
      </Text>

      <Text className="text-black">• Unlimited article access.</Text>
      <Text className="text-black">• Ad-free browsing experience.</Text>

      <View className="mt-3.5 flex-row items-center justify-between">
        <Text className="font-merriweather-sans-800 text-base text-white">
          Recommended
        </Text>

        <RightIcon color={isRecommended ? "white" : "#AAD4D6"} />
      </View>
    </View>
  );
};
