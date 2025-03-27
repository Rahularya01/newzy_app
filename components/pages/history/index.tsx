import React from "react";
import { FlatList, View } from "react-native";
import { newsData } from "~/constants/news";
import { NewsCard } from "../home/news-card";

const HistoryPage: React.FC = () => {
  return (
    <View className="flex-1">
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NewsCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HistoryPage;
