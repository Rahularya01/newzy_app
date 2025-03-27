import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { CommentFilled } from "~/assets/icons/comment-filled";
import { HeartFilled } from "~/assets/icons/heart-filled";
import { ShareIcon } from "~/assets/icons/share-icon";
import { Text } from "~/components/ui/text";

const NewsActions: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View className="mt-[15px] flex-row items-center justify-between">
      <View className="flex-row items-center gap-7">
        <View className="flex-row items-center gap-2.5">
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <HeartFilled color={isLiked ? "#E33629" : "#AAD4D6"} />
          </TouchableOpacity>
          <Text className="font-inter-600 text-[12px] text-black">53</Text>
        </View>
        <View className="h-[15px] w-[1px] bg-[#ddd]" />
        <View className="flex-row items-center gap-2.5">
          <TouchableOpacity>
            <CommentFilled color={isLiked ? "#E33629" : "#AAD4D6"} />
          </TouchableOpacity>
          <Text className="font-inter-600 text-[12px] text-black">15</Text>
        </View>
      </View>

      <View className="flex-row items-center gap-2">
        <TouchableOpacity>
          <ShareIcon />
        </TouchableOpacity>
        <Text className="font-inter-400 text-[12px] text-[#aaa]">12</Text>
      </View>
    </View>
  );
};

export default NewsActions;
