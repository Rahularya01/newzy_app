import React from "react";
import { ScrollView, View } from "react-native";
import SearchCard from "~/components/pages/news/search-card";
import SearchInput from "~/components/pages/news/search-input";

const NewsPage: React.FC = () => {
  return (
    <View className="flex-1">
      <View className="w-full border-b-[5px] border-[#eee] pb-5">
        <SearchInput />
      </View>
      <View className="flex-1">
        <ScrollView className="flex-1">
          <SearchCard />
          <SearchCard /> <SearchCard /> <SearchCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default NewsPage;
