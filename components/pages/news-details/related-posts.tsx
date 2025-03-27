import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import RelatedPostsCarousel from "./related-posts-carousel";

const RelatedPosts: React.FC = () => {
  return (
    <View className="w-full gap-4 bg-[#E5F2F3] px-[16px] py-7">
      <Text className="font-merriweather-sans-800 text-3xl text-primary">
        Related Post
      </Text>
      <RelatedPostsCarousel />
    </View>
  );
};

export default RelatedPosts;
