import React from "react";
import { FlatList, View } from "react-native";
import { NewsCard } from "~/components/pages/home/news-card";
import { newsData } from "~/constants/news";

const Bookmark: React.FC = () => {
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NewsCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Bookmark;
