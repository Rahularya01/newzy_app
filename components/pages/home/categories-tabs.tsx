import React, { useState } from "react";
import { Text } from "~/components/ui/text";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { cn } from "~/lib/utils";

const categories = [
  "Education",
  "Real Estate",
  "Technology",
  "Health",
  "Politics",
  "Sports",
  "Entertainment",
  "Business",
  "Science",
  "World News",
  "Lifestyle",
  "Environment",
  "Travel",
  "Food",
  "Culture",
  "Finance",
  "Automobile",
  "Crime",
  "Weather",
  "Gaming",
];

const CategoriesTab: React.FC = () => {
  const [tab, setTab] = useState("Education");
  return (
    <ScrollView
      contentContainerClassName="flex-row gap-2 px-4 pt-1"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category, index) => (
        <TouchableOpacity key={index} onPress={() => setTab(category)}>
          <View
            className={cn("rounded-full border border-[#AAD4D6] px-3.5 py-2", {
              "bg-[#AAD4D6]": tab === category,
            })}
          >
            <Text
              className={cn("font-inter-500 text-sm text-[#222]", {
                "text-primary": tab === category,
              })}
            >
              {category}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoriesTab;
