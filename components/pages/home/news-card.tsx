import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { newsData } from "~/constants/news";
import { BookmarkFillIcon } from "~/assets/icons/bookmark-fill";
import { BookmarkIcon } from "~/assets/icons/bookmark";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { HeartFilled } from "~/assets/icons/heart-filled";
import { CommentFilled } from "~/assets/icons/comment-filled";
import { ShareIcon } from "~/assets/icons/share-icon";
import { router } from "expo-router";

export const NewsCard = ({ item }: { item: (typeof newsData)[0] }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Pressable
      onPress={() => {
        router.push(`/news/${item.id}`);
      }}
    >
      <View className="rounded-lg border-b-[5px] border-[#eee] bg-white px-5 py-4">
        <View className="mb-[15px] flex-row items-start justify-between gap-5">
          <View className="w-[80%]">
            <Text className="mb-2.5 font-merriweather-sans-800 text-[16px] leading-[22px] text-[#222]">
              {item.title}
            </Text>
            <Text
              className="font-inter-400 text-[12px] text-[#777]"
              lineBreakMode="tail"
              numberOfLines={2}
            >
              {item.description}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setIsSaved(!isSaved)}>
            <View className="h-[32px] w-[32px] items-center justify-center rounded-full bg-primary">
              {isSaved ? <BookmarkFillIcon /> : <BookmarkIcon />}
            </View>
          </TouchableOpacity>
        </View>
        <View className="relative h-[225px]">
          <View
            className="absolute right-3.5 top-3.5 z-10 rounded-full bg-white px-3 py-[7px]"
            style={{
              boxShadow: "0px 5px 10px 0px #00000026",
            }}
          >
            <Text className="font-inter-600 text-sm font-medium text-primary">
              {item.category}
            </Text>
          </View>
          <Image
            source={item.image}
            className="h-[225px] w-full rounded-[15px]"
          />
        </View>
        <View className="mt-[15px]">
          <View className="flex-row items-center gap-2.5">
            <Avatar alt="Zach Nugent's Avatar" className="h-[30px] w-[30px]">
              <AvatarImage
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/fd48/aa3e/9f7bfe711cbd1fbe55a9b509a1dbe7c4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bNG5MrlA83x0NSnCTBJVmqo8uPUsJofn-ijErdPpgA27hWW6XSU9lzgRAg3lfHf6D07uLFyIIuB-7gjiaSCkzq087tZCg1fQJ3bOH4mr1CWFuQXhOh1zPUJB-55YcYbkY9ja36ec0pFDNAjFwqduhdGBQIy8-6e1L0X~qXJvMKLBc0b0GHk0O~7ck8kpK6JptytkkRYyDFG2P2I5bXbvVqnlYWBTsObX16FD5Q2SiXMvlRUVSwTwOfzMF30be~vypCU0Kgw3NCSx-ZbsrK5XEcsEb3QE4edj1i~6sYjzL-wqbRXRmApL~qFWCr8C7Un4iW8lcZ~yUIfNRfgU4ZHdAA__",
                }}
              />
              <AvatarFallback>
                <Text>ZN</Text>
              </AvatarFallback>
            </Avatar>

            <View>
              <Text className="font-inter-400 text-[14px] text-[#AAA]">
                Created by{" "}
                <Text className="font-inter-600 text-[#777]">John Smith</Text>
              </Text>
              <Text className="font-inter-400 text-[12px] text-[#aaa]">
                {item.date} • {item.reads} read
              </Text>
            </View>
          </View>
          <View className="mt-[15px] flex-row items-center justify-between">
            <View className="flex-row items-center gap-7">
              <View className="flex-row items-center gap-2.5">
                <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                  <HeartFilled color={isLiked ? "#E33629" : "#AAD4D6"} />
                </TouchableOpacity>
                <Text className="font-inter-600 text-[12px] text-black">
                  {item.likes}
                </Text>
              </View>
              <View className="h-[15px] w-[1px] bg-[#ddd]" />
              <View className="flex-row items-center gap-2.5">
                <TouchableOpacity>
                  <CommentFilled color={isLiked ? "#E33629" : "#AAD4D6"} />
                </TouchableOpacity>
                <Text className="font-inter-600 text-[12px] text-black">
                  {item.comments}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center gap-2">
              <TouchableOpacity>
                <ShareIcon />
              </TouchableOpacity>
              <Text className="font-inter-400 text-[12px] text-[#aaa]">
                {item.shares}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
