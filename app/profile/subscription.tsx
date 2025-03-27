import React from "react";
import { View } from "react-native";
import {
  SubscriptionCard,
  SubscriptionCardProps,
} from "~/components/pages/profile/subscription-card";
import { Text } from "~/components/ui/text";

const subscriptionPlans: SubscriptionCardProps[] = [
  {
    tag: "Super X1",
    name: "Premium",
    price: 10,
    isRecommended: true,
  },
  {
    tag: "Super X2",
    name: "Super Premium",
    price: 15,
    isRecommended: false,
  },
];

const SubscriptionPlans: React.FC = () => {
  return (
    <View className="flex-1 bg-white px-5 py-6">
      {/* Header */}
      <Text className="mb-1 font-merriweather-sans-800 text-3xl text-primary">
        Select a Plan
      </Text>
      <Text className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Text>

      <View className="w-full gap-5">
        {subscriptionPlans.map((plan, index) => (
          <SubscriptionCard
            key={index}
            isRecommended={plan.isRecommended}
            name={plan.name}
            tag={plan.tag}
            price={plan.price}
          />
        ))}
      </View>
    </View>
  );
};

export default SubscriptionPlans;
