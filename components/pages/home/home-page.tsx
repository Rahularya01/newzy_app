import React from "react";
import { FlatList, View } from "react-native";
import { newsData } from "~/constants/news";
import CategoriesTab from "./categories-tabs";
import { NewsCard } from "./news-card";

const HomePage: React.FC = () => {
  return (
    <View className="w-full flex-1">
      <View className="w-full border-b-[5px] border-[#eee] pb-3.5">
        <CategoriesTab />
      </View>
      <View className="flex-1">
        <FlatList
          data={newsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <NewsCard item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomePage;
